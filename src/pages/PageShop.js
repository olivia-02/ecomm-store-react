import React, {useContext, useEffect, useState} from 'react'
import ProductContext from '../contexts/product'
import ProductList from 'components/ProductList'
import Filter from 'components/Filter'

const PageShop = () => {

	const products = useContext(ProductContext)
	const [productResult, setProductResult] = useState(products)

	  const [filters, setFilters] = useState({
	    query: ``,
	    sortBy: `none`,
		colour: `all`
	  })

	  useEffect(() => {
	
	    let filteredProducts = [...products]
	    // Check allllll dem filters
	    if (filters.query) {
	  	filteredProducts = filteredProducts.filter((prod) => prod.type.toLowerCase().includes(filters.query.toLowerCase().trim()))
		}

		if (filters.colour !== `all`) {
			console.log("Boopityboop", filters.colour)
			function checkCol(col) {
				return col === filters.colour
			}
			filteredProducts = filteredProducts.filter((prod) => prod.colours.find(checkCol))
			// filteredProducts = filteredProducts.filter((prod) => )
		}
		// filteredProducts = filteredProducts.filter((prod) => prod)

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
      
          <header className="heading">
            <h1>Flowers & Foilage</h1>
          </header>

		 <Filter filters={filters} setFilters={setFilters} />

		<ProductList style={{display: "grid;"}} products={productResult} />

		<footer>
			<h2>{productResult.length} products found</h2>
			<p>Thanks! - Olivia Robson :)</p>
		</footer>

	  </main>
	)
  }

  export default PageShop