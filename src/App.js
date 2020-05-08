import { BrowserRouter as Router, Route, Switch, ReactDOM } from 'react-router-dom'
import React, {useState} from 'react'
// import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Uielements from './pages/Uielements'
import Discount from './pages/Discount'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


import Menu from './components/Menu'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'

function App() {

  const [aaa, setAaa] = useState(false)

  return (
    <Router>
      <>
        <Menu />
        <Switch>
          <Route path="/Uielements">
              <Product/>
          </Route>
          <Route path="/Checkout">
            <Cart />
          </Route>
          <Route path="/product">
            <ProductDetail />
          </Route>
          <Route path="/discount">
            <Checkout />
          </Route>
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
