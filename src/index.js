import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from './components/app'
import Home from './components/home'
import Train from './components/train'
import User from './components/user'
import {HashRouter as Router, Route, Switch, IndexRoute} from 'react-router-dom'

var store = createStore(reducer, {curPage: 'Home'})

render(
  <Provider store = {store}>
    <Router>
      <App>
        <Switch>
          <Route path = '/train' component = {Train}/>
          <Route path = '/user' component = {User}/>
          <Route  path = '/' component = {Home}/>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
)
/*
*/
