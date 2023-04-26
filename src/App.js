import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';


import './App.css';


const App = () => {

  const [recipe,setRecipe] = useState([])


  useEffect( () => {
    fetch('https://api.fbi.gov/wanted/v1/list')
    .then(response => response.json())
    .then(data => {
      console.log(data.items)
      setRecipe(data.items)
    })

    
  } , [] )

  return(
    <div className='App'>
      <h1>FBI SEARCH MOST WANTED PEOPLE</h1>
      <form className='search-form'>
        <input className='search-input' type='text'></input>
        <button className='search-button' type='submit'> Search</button>

      
        <div className='wanted-card'>
        {recipe.map( (people , index) => {
          console.log(people.images[0].thumb)
          return(
            <div className='wanted-person'>
            <RecipeCard 
              key={index}
              name={people.title}
              img={people.images[0].thumb}
              text={people.reward_text}
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
