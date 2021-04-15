import React, { useState, useEffect } from 'react';
import ProductList from 'components/ProductList'
import 'css/index.css'
import firebase from '../util/firebase'
import Filters from 'components/Filters'

const App = () => {

  
  const [flowerList, setFlowerList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = firebase.firestore()

    db.collection(`Flowers`).get().then(
      (snapshot) => {
        const flowerData = []

        snapshot.docs.forEach(doc => {
          flowerData.push(doc.data())
        })

      setFlowerList(flowerData)
      setLoading(false)
    })
  },[])

return (
  <div>
    <header className="page-header">
		<a href="index.html" className="logo"><img src="./src/img/Tokonoma.png" alt="Tokonoma" /></a>
  
		{/* <!-- Navigation menu and toggle button (non-functional) --> */}
		<button type="button" className="nav-toggle">
		  <span className="material-icons">menu</span>
		</button>
		<nav aria-label="Primary" className="navigation">
		  <ul className="menu">
			<li><a href="#">Shop</a>
			  <ul className="submenu">
				<li><a href="#">Flowers & Foilage</a></li>
				<li><a href="#">Vases</a></li>
				<li><a href="#">Stands & Event Props</a></li>
			  </ul>
			</li>
			<li><a href="#">About</a></li>
			<li><a href="#">FAQ</a></li>
			<li><a href="#">Inspiration</a></li>
		  </ul>
		</nav>
  
		{/* <!-- Search for a product (non-functional) --> */}
		<form className="search">
		  <label>Search
			<input type="search" name="find" id="find" />
		  </label>
		  <button type="button"><span className="material-icons">search</span></button>
		</form>
  
		{/* <!-- Additional links --> */}
		<ul className="your-products">
		  <li><a href="#"><span className="material-icons" aria-label="Favourites">folder_special</span></a></li>
		  <li><a href="#"><span className="material-icons" aria-label="Items in your cart">shopping_basket</span></a></li>
		</ul>
	  </header>
    <main className="products">
        <header className="heading">
          <h1>Flowers & Foilage</h1>
        </header>

        {/* <!-- Filtering product form --> */}
      <Filters></Filters> 

      <ProductList products={flowerList} /> 

      <nav aria-label="Pagination" className="pagination">
          <p>1-6 of 23 products found</p>
          <ol className="pages">
            <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
            <li><a href="#" aria-label="Page 2">2</a></li>
            <li><a href="#" aria-label="Page 3">3</a></li>
            <li><a href="#" aria-label="Page 4">4</a></li>
            <li><a href="#" aria-label="Page 5">5</a></li>
          </ol>
        </nav>
      </main>
    </div>
)}
export default App
