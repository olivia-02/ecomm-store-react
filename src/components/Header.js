import React from 'react'
import TokonomaImg from '../img/Tokonoma.png'

const Header = () => {

	return(
	<header className="page-header">
			<a href="/#" className="logo"><img src={TokonomaImg} alt="Tokonoma" /></a>
	
			{/* <!-- Navigation menu and toggle button (non-functional) --> */}
			<button type="button" className="nav-toggle">
			<span className="material-icons">menu</span>
			</button>
			<nav aria-label="Primary" className="navigation">
			<ul className="menu">
				<li><a href="/#">Shop</a>
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
	
	
			{/* <!-- Additional links --> */}
			<ul className="your-products">
			<li><a href="#"><span className="material-icons" aria-label="Favourites">folder_special</span></a></li>
			<li><a href="#"><span className="material-icons" aria-label="Items in your cart">shopping_basket</span></a></li>
			</ul>
		</header>
	)
}

export default Header