import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';


import './App.css';


const App = () => {

  const [recipe,setRecipe] = useState([])


  useEffect( () => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setRecipe(data.results)
    })

    
  } , [] )

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-input' type='text'></input>
        <button className='search-button' type='submit'> Search</button>

       

        {recipe.map( (people , index) => {
          return(
            <RecipeCard 
              key={index}
              name={people.name}
              height={people.height}
             
            />
          )
        })}
      </form>
      
  
   
      
    </div>
  )
}

export default App;
