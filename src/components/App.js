import React from 'react'
import ProductList from 'components/ProductList'
import 'css/index.css'

const App = () => {
	const productArray = [
		{
			"id": 1,
			"img": 'src/img/lily1.jpg',
			"type": "Lily",
			"price": 4.00,
			"para": "Lillies are fresh garden flowers, often symbolic of spring and innocence. Add them to bouquets that need pops of colour, or a brighter touch.",
			"colours": ["Yellow", "White", "Pink", "Calla"]
		},
		{
			"id": 2,
			"img": 'src/img/rose4.jpg',
			"type": "Rose",
			"price": 2.00,
			"para": "Roses symbolize love and romance and come in a variety of colours, they add a classic air to any bouquet and arrangement.",
			"colours": ["Red", "White", "Pink", "Yellow"]
		},
		{
			"id": 3,
			"img": 'src/img/mum1.jpg',
			"type": "Chrysanthemum",
			"price": 3.00,
			"para": "Chrysanthemums (also called 'mums' for short) are part of the Chinese Four Gentlemen flowers, along with plum blossoms, orchids, and bamboo; representing the four seasons. Mums represent autumn, and are perfect for fall seasonal arrangements.",
			"colours": ["Red", "White", "Pink", "Yellow"]
		},
		{
			"id": 4,
			"img": 'src/img/anemone1.jpg',
			"type": "Anemone",
			"price": 3.00,
			"para": "Also called 'Windflowers', anemones have various meanings throughout history and various cultures. They're in the buttercup family and can be various colours, making them versatile for any occasion.",
			"colours": ["red", "white", "blue"]
		}
	]

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

      <ProductList products={productArray} /> 

      <nav aria-label="Pagination" className="pagination">m
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
)

}

export default App