import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';


import './App.css';


const App = () => {

  const [recipe,setRecipe] = useState("")


  useEffect( () => {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setRecipe(data)
    })

    
  } , [] )

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-input' type='text'></input>
        <button className='search-button' type='submit'> Search</button>

        {recipe}

        {/* {recipe.map( (dog , index) => {
          return(
            <RecipeCard 
              key={index}
              name={dog.breed}
              country={dog.country}
            />
          )
        })} */}
      </form>
      
  
   
      
    </div>
  )
}

export default App;
