import React from 'react'

import './recipecard.css'

const RecipeCard = (props) => {

    const {name , img , text , description} = props

    
    return(
        <div className='card'>
            <h1>Future Info </h1>
            <img src={img} alt='img'></img>
            <ul>
                <li>Name : {name}</li>
                <li>Info :{text}</li>
                <li>Description: {description}</li>
                <li></li>
            </ul>
        </div>
    )
}

export default RecipeCard