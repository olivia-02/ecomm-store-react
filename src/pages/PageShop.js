import React, {useContext, useEffect, useState} from 'react'
import ProductContext from '../contexts/product'
import ProductList from 'components/ProductList'
import Filter from 'components/Filter'

const PageShop = () => {

	const products = useContext(ProductContext)
	const [productResult, setProductResult] = useState(products)

	  const [filters, setFilters] = useState({
	    query: ``,
	    sortBy: `none`
	  })

	  useEffect(() => {
	    // Creat a clone Array
	    let filteredProducts = [...products]
	    // Check all the filters
	    if (filters.query)
	  	filteredProducts = filteredProducts.filter((prod) => prod.type.toLowerCase().includes(filters.query.toLowerCase().trim()))
		console.log(filters)
	   // Assign the filtered products to the result state
	   setProductResult(filteredProducts)

	   switch (filters.sortBy) {
		case `highest`:
		  filteredProducts.sort((a, b) => b.price - a.price)
		  break;
		case `lowest`:
		  filteredProducts.sort((a, b) => a.price - b.price)
		  break;
	  }

	 }, [filters])


	return (
	  <main className="products">

		 <Filter filters={filters} setFilters={setFilters} />

		<ProductList products={productResult} />

	  </main>
	)
  }

  export default PageShop