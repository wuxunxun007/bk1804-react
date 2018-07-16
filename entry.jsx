import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary.jsx'
import App from './App.jsx'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Detail from './Detail.jsx'
import store from '@/store/index.js'
import Kind from '@/components/Kind.jsx'

import './main.scss'

function show () {
  ReactDOM.render(
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path='/register' component = {Register}/>
          <Route path='/login' component = {Login}/>
          <Route path='/kind/:classID' component = {Kind}/>
          <Route path='/detail/:goodsID' component = {Detail}/>
          <Route path='/' component = {App}/>
        </Switch>
      </Router>
    </ErrorBoundary>,
    document.getElementById('root')
  )
}
show()

store.subscribe(show)
