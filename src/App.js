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
    <div>
      <h1>Recipe Mrc </h1>
      {recipe.map( (dog , index) => {
        return(
          <RecipeCard key={index}
            name={dog.breed}
            country={dog.country}
          />
        )

      })}
      
    </div>
  )
}

export default App;
