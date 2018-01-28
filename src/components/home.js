import React from 'react'
import HomeDesktop from './homeDesktop'
import {Switch, Route} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return <div>
      <Switch>
        <Route path = '/'component = {HomeDesktop}/>
	    </Switch>
    </div>
  }
}

export default Home
