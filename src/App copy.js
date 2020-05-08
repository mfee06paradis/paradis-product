import { BrowserRouter as Router, Route, Switch, ReactDOM } from 'react-router-dom'
import React, {useState} from 'react'
// import Cart from './pages/Cart'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Uielements from './pages/Uielements'
import Discount from './pages/Discount'
import Cart from './pages/Cart'


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
            <Uielements />
          </Route>
          <Route path="/Cart">
          {setTimeout(()=>{
              console.log("1111");
              setAaa(true);
              {/* ReactDOM.render(<Cart />, document.getElementById('root')); */}
            }, 3000)}
            {aaa ? <Cart /> : null}
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/discount">
            <Cart />
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
