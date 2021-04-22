import React, { useState, useEffect } from 'react';
import 'css/index.css'
import ProductContext from 'contexts/product'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import firebase from '../util/firebase'
import Header from 'components/Header'
import PageShop from 'pages/PageShop'
import PageProduct from 'pages/PageProduct'
import Page404 from 'pages/Page404'


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
    
      <Header></Header>
      
        
      <Router>
        <Switch>
					<Route exact path="/">
            <PageShop />
          </Route>
					<Route path="/product/:id">
            <PageProduct />
          </Route>
          <Route path="*" component={Page404} />
				</Switch>
        </Router>
  </ProductContext.Provider>
)}
export default App
