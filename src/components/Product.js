import React from 'react'

const Product = ({ id, img, type, price, para, colours }) => {

	console.log(`Product()`)

	return (
	<article className="product">
		<header>
		<img src={img} alt={type} id={id} />
		<h3>{type}</h3>
		<data value={price}>${price}/e</data>
		<p>{para}</p>
		<a href="#">see more</a>
		</header>
		<form>
		<fieldset>
			<legend>Colours</legend>
			<ul>
			<li><label><input type="radio" name="colour" value={colours[0]}></input>{colours[0]}
			</label></li>
			<li><label><input type="radio" name="colour" value={colours[1]}></input>{colours[1]}</label></li>
			<li><label><input type="radio" name="colour" value={colours[2]}></input>{colours[2]}</label></li>
			<li><label><input type="radio" name="colour" value={colours[3]}></input>{colours[3]}</label></li>
			</ul>
		</fieldset>
		<fieldset>
			<legend>Bloom Count</legend>
			<ol>
			<li><label><input type="radio" name="size" value="5"> 5</input></label></li>
			<li><label><input type="radio" name="size" value="10"> 10</input></label></li>
			<li><label><input type="radio" name="size" value="12"> 12</input></label></li>
			<li><label><input type="radio" name="size" value="16"> 16</input></label></li>
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