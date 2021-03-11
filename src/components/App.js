import React from 'react'
import ProductList from 'components/ProductList'

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
	<>
		<ProductList products={productArray} /> 
	</>
)

}

export default App