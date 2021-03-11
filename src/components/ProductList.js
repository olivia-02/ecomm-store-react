import React from 'React'
import Product from 'components/Product.js'

const ProductList = ({ products }) => {

let allProducts = products.map(({ id, img, type, price, para, colours }) => <Product key={id} id={id} img={img} type={type} price={price} para={para} colours={colours} />)

return (
	<section className="results">
        <h2 className="subheading">Results</h2>
		{allProducts}
	</section>
)

}

export default ProductList