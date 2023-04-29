import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';


import './App.css';


const App = () => {

  const [recipe,setRecipe] = useState([])
  let [searchPeople , setSearch] = useState([])


  useEffect( () => {
    fetch('https://api.fbi.gov/wanted/list')
    .then(response => response.json())
    .then(data => {
      console.log(data.items)
      setRecipe(data.items)
    })

  } , [] )

  

  const handleOnChange = (e) => {
    console.log(recipe)
    const valueInput = e.target.value.toUpperCase()
    console.log(valueInput)
   
    setSearch(
    searchPeople = recipe.filter(person => person.title.includes(valueInput))
    )

    console.log(searchPeople)
    console.log(recipe)

    setRecipe(searchPeople)

  }

  const handleOnClick = (e) => {
    e.preventDefault()
    setRecipe(searchPeople)
  }




  return(
    <div className='App'>
      <h1>FBI SEARCH MOST WANTED PEOPLE</h1>
      <form className='search-form'>
        <input className='search-input' type='text' placeholder='search...' onChange={handleOnChange}></input>
        <button className='search-button' type='submit' onClick={handleOnClick}> Search</button>

      
        <div className='wanted-card'>
        {recipe.map( (people , index) => {
          
          return(
            <div className='wanted-person' key={index}>
            <RecipeCard 
              key={index}
              name={people.title}
              img={people.images[0].thumb}
              text={people.reward_text}
              description={people.description}
              weight={people.weight_max}
              national={people.nationality}
            />
            </div>
          )
        })}

        </div>
      </form>

  
      
  
   
      
    </div>
  )
}

export default App;
