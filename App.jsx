import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MainFooter from '@/components/MainFooter.jsx'
import Home from '@/components/Home.jsx'
import Cart from '@/components/Cart.jsx'
import User from '@/components/User.jsx'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      routes: [
        {path: '/home',component: Home},
        {path: '/cart',component: Cart},
        {path: '/user',component: User}
      ]
    }
  }
  
  render () {
    return (
      <div className = 'container'>
			
			哈哈哈哈,我是jbone
        <Switch>
          {
            this.state.routes.map((item,index) => (
              <Route key={index} path={item.path} component = {item.component} />
            ))
          }
         {/*  <Route path='/home' component = {Home} />
          <Route path='/kind' component = {Kind} />
          <Route path='/cart' component = {Cart} />
          <Route path='/user' component = {User} /> */}
          <Redirect to = {{pathname: '/home'}} />
        </Switch>
        <MainFooter />
      </div>
    )
  }
}

export default App
