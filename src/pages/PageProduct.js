import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from 'contexts/product'
 import Product from 'components/Product'

  

const PageProduct = () => {

  const flowerid = useParams().id
  const products = useContext(ProductContext)

  // Which product do I need to show here???
   const prod = products.find((targetFlower) => targetFlower.id == flowerid) || products[0]    // For now, assume it's always the first product
	console.log("Hold up, wait a minute, somethin might be right. => ", prod)
  return (
    <main>
      <h1>One Product:</h1>
       <Product key={prod.id} id={prod.id} img={"../" + prod.img} type={prod.type} price={prod.price} para={prod.para} colours={prod.colours} /> 
    </main>
  )
}

export default PageProduct