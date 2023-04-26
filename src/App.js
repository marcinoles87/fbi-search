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
      <form className='search-form'>
        <input className='search-input' type='text'></input>
        <button className='search-button' type='submit'> Search</button>

      

        {recipe.map( (people , index) => {
          console.log(people.images[0])
          return(
            <RecipeCard 
              key={index}
              name={people.title}
              img={people.images.large}
              text={people.reward_text}
            />
          )
        })}
      </form>

  
      
  
   
      
    </div>
  )
}

export default App;
