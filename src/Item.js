import React from 'react'
import Card from './Card'
import Cart from './Cart'

function Item({name,description,price}) {
  return (
    <div>
         <Cart name={name} description={description} />

         {/*Class Based Props */}
         <Card name={name} description={description} />
        <h3>${price}</h3>
    </div>
  )
}

export default Item