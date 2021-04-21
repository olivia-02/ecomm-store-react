import React, { useState, useEffect } from 'react';
import 'css/index.css'
import ProductContext from 'contexts/product'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import firebase from '../util/firebase'
import Header from 'components/Header'
import PageShop from 'pages/PageShop'


const App = () => {

  
  const [flowerList, setFlowerList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = firebase.firestore()

    db.collection(`Flowers`).get().then(
      (snapshot) => {
        const flowerData = []
        console.log("Got the datas")

        snapshot.docs.forEach(doc => {
          flowerData.push(doc.data())
        })

      setFlowerList(flowerData)
      setLoading(false)
    })
  },[])

return (
  <ProductContext.Provider value={flowerList}>
    <Router>
      <Header></Header>
      <main className="products">
          <header className="heading">
            <h1>Flowers & Foilage</h1>
          </header>

        

        <Switch>
					<Route path="/" component={PageShop} />
					{/* <Route path="/product/:slug" component={PageProduct} /> */}
					{/* <Route path="*" component={Page404} /> */}
					{/* <Redirect to="/" /> */}
				</Switch>

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
      </Router>
    </ProductContext.Provider>
)}
export default App
