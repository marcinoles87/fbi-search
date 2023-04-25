import React from 'react'

const RecipeCard = (props) => {

    const {name , height} = props
    return(
        <div>
            <h1>Future Info </h1>
            <ul>
                <li>{name}</li>
                <li>{height}</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default RecipeCard