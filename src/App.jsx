import { useState } from 'react'

import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Users from './pages/Users'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import HeaderTop from './layouts/HeaderTop'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderTop />
      
      <div className='flex flex-row'>
        <div className='flex basis-1/6'>
        
        <Header />
        
        </div>
        <div className='flex basis-5/6 pt-3'>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
          <Route path="/orders" exact>
            <Orders />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
        </Switch>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default App
