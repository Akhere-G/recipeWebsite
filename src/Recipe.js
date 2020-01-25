import React from 'react'

export default function Recipe({recipeData}) {

  console.log(recipeData)
  return (
    <div className='card'>
        <div className='h6 card-header'>{recipeData.title}</div>
      <div className="card-body">
        <div className='row'>
          <div className='col'>
            <img className='float-left img-fluid img-thumbnail' alt={recipeData.title} src={recipeData.image}></img>
          </div>  
          <div className='col-9'>
            <div className='h6'>Benefits: {recipeData.healthLabels.join(', ')}</div>
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
