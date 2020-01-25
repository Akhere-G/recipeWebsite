import React from 'react'

export default function Recipe({recipeData}) {

  return (
    <div className='card m-2'>
        <div className='h6 card-header'>{recipeData.label}</div>
      <div className="card-body">
        <div className='row'>
          <div className='col'>
            <img className='float-left img-fluid img-thumbnail' alt={recipeData.label} src={recipeData.image}></img>
          </div>  
          <div className='col-8'>
            <div>Benefits: {recipeData.healthLabels.join(', ')}</div>
            <div>Yields: {recipeData.yield}</div>
            <div>Cautions: {recipeData.cautions.join(', ')}</div>
            <div>TotalTime: {recipeData.totalTime}</div>
            <div>Calories: {Math.round(recipeData.calories)}</div>

          </div>  
        </div>

       
      </div>
          
    </div>
  )
}
