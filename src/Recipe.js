import React from 'react'

export default function Recipe({recipeData}) {
  console.log(recipeData)
  const title = recipeData.label
  const image = recipeData.image
  const healthLabels = recipeData.healthLabels
  return (
    <div className='card'>
      <div className='h6 card-header'>{title}</div>
      <div className='row card-body'>
          <div className='col-4'>
            <img className='card-img img-fluid rounded-circle' alt={title} src={image}></img>
          </div>
          <div className='col-8'>
            <p>{healthLabels.join(", ")}</p>
          </div>

    
      </div>
    </div>
  )
}
