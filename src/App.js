import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';

import './App.css';


const App = () => {

  let [recipe,setRecipe] = useState([])


  useEffect( () => {
    fetch('https://catfact.ninja/breeds/')
    .then(response => response.json())
    .then(data => {
      setRecipe(data.data)
      
    })
  })

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-input' type='text'></input>
        <button className='search-button' type='submit'> Search</button>
      </form>
      
  
   
      
    </div>
  )
}

export default App;
