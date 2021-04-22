import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from 'contexts/product'
 import Product from 'components/Product'

const PageProduct = () => {

  //Get the info from the url
  const flowerid = useParams().id
  const products = useContext(ProductContext)

  // Compare the product in the url with the fowers in the context
   const prod = products.find((targetFlower) => targetFlower.id == flowerid)

  return (

    <main style={{width: "60vw", margin: "auto" }}>
      <h1>One Product:</h1>
       <Product key={prod.id} id={prod.id} img={prod.img} type={prod.type} price={prod.price} para={prod.para} colours={prod.colours} /> 
    </main>
  )
}

export default PageProduct