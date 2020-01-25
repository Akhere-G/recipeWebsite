import React from 'react'
import Recipe from './Recipe.js'
export default function RecipeList({recipes}) {
  let count = 0
  return (
    <div >
      {
        recipes.map(r => <Recipe key={Math.random()} recipeData={r.recipe}/>)
      }
    </div>
  )
}
