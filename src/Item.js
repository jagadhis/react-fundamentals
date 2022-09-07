import React from 'react'

function Item({name,description,price}) {
  return (
    <div>
        <h3>{name}</h3>
        <h3>{description}</h3>
        <h3>{price}</h3>
    </div>
  )
}

export default Item