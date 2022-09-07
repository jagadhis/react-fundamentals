import React from 'react'
import Cart from './Cart'

function Item({name,description,price}) {
  return (
    <div>
         <Cart name={name} description={description} />
        <h3>{price}</h3>
    </div>
  )
}

export default Item