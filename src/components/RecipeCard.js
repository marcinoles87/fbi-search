import React from 'react'

const RecipeCard = (props) => {

    const {name , img , text} = props

    
    return(
        <div>
            <h1>Future Info </h1>
            <img src={img} alt='img'></img>
            <ul>
                <li>{name}</li>
                <li>{text}</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default RecipeCard