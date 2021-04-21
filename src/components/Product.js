import React from 'react'
import {Link} from 'react-router-dom'

const ColourList = ( {options} ) => {

	let listItems = options.map((option) =>
	<li key={option}><label><input type="radio" name="colour" value={option}></input>{option}
	</label></li>)

		return (
			<ul>{listItems}</ul>
		
	)

}

const Product = ({ id, img, type, price, para, colours}) => {

	console.log(`Product loaded`)

	return (
	<article className="product">
		<header>
		<img className="photo" src={img} alt={type} id={id} />
		<h3><Link to={`/product/${id}`}></Link>{type}</h3>
		<data value={price}>${price}/e</data>
		<p>{para}</p>
		<Link to={`/product/${id}`}>see more</Link>
		</header>
		<form>
		<fieldset>
			<legend>Colours</legend>
			<ColourList options={colours} />
		</fieldset>
		<fieldset>
			<legend>Bloom Count</legend>
			<ol>
			<li><label><input type="radio" name="size" value="5"></input> 5</label></li>
			<li><label><input type="radio" name="size" value="10"></input> 10</label></li>
			<li><label><input type="radio" name="size" value="12"></input> 12</label></li>
			<li><label><input type="radio" name="size" value="16"></input> 16</label></li>
			</ol>
		</fieldset>
		</form>
		<footer>
		<button type="button"><span className="material-icons">shopping_bag</span> Add to Order</button>
		<button type="button"><span className="material-icons">stars</span></button>
		</footer>
  	</article>
	)
}

export default Product