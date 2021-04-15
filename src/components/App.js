import React, { useState, useEffect } from 'react';
import ProductList from 'components/ProductList'
import 'css/index.css'
import firebase from '../util/firebase'

const App = () => {

  
  const [flowerList, setFlowerList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = firebase.firestore()

    db.collection(`Flowers`).get().then(
      (snapshot) => {
        const flowerData = []
        console.log(snapshot.docs)

        snapshot.docs.forEach(doc => {
          console.log(doc.data())
          flowerData.push(doc.data())
        })

      setFlowerList(flowerData)
      console.log(flowerData)
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
        <form className="filters">
          <h2>Filters</h2>

          <div className="filter-options">
            <fieldset>
              <legend>Colour</legend>
              <ul className="filter-list">
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="pink" id="pink"></input> <label htmlFor="pink"><span></span>Pink</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="white" id="white"></input> <label htmlFor="white"><span></span>White</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="grey" id="grey"></input> <label htmlFor="grey"><span></span>Grey/Green</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="red" id="red"></input><label htmlFor="red"><span></span>Red</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="colour" value="blue" id="blue"></input> <label htmlFor="blue"><span></span>Blue/Purple</label></li>
              </ul>
            </fieldset>
            <fieldset>
              <legend>Season</legend>
              <ul className="filter-list">
                <li><input type="checkbox" className="checkboxLotus" name="season" value="summer" id="summer"></input> <label htmlFor="summer"><span></span>Summer</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="season" value="autumn" id="autumn"></input> <label htmlFor="autumn"><span></span>Autumn</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="season" value="winter" id="winter"></input> <label htmlFor="winter"><span></span>Winter</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="season" value="spring" id="spring"></input> <label htmlFor="spring"><span></span>Spring</label></li>
              </ul>
            </fieldset>
            <fieldset>
              <legend>Number of Blooms/Stalks <br /> (Bulk) </legend>
              <ol className="filter-list">
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="2" id="2"></input> <label htmlFor="2"><span></span>2</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="5" id="5"></input> <label htmlFor="5"><span></span>5</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="10" id="10"></input> <label htmlFor="10"><span></span>10</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="12" id="12"></input><label htmlFor="12"><span></span>12</label></li>
                <li><input type="checkbox" className="checkboxLotus" name="numbermax" value="16" id="16"></input><label htmlFor="16"><span></span>16</label></li>
              </ol>
            </fieldset>
          </div>
          <fieldset id="sortfield">
            <label htmlFor="sort">Show</label>
        {/* style="margin-right: 20px;" */}
            <select name="sort" id="sort">
              <option value="price-high">Price, highest to lowest</option>
              <option value="price-low">Price, lowest to highest</option>
              <option value="newest">Newest releases</option>
            </select>
          </fieldset>
        </form>

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
