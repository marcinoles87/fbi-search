import React,{useEffect, useState} from 'react'
import RecipeCard from './components/RecipeCard';

import './App.css';


const App = () => {

  let [recipe,setRecipe] = useState()


  useEffect( () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/?results=1')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
    })
  })

  return(
    <div>
      <h1>Recipe Mrc </h1>
      <RecipeCard/>
    </div>
  )
}

export default App;
