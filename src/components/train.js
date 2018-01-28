import React from 'react'
import TrainDesktop from './trainDesktop'
import {Switch, Route} from 'react-router-dom'

class Train extends React.Component{
  render(){
    return <div
        style = {{
          display: 'flex',
          flexGrow: '1',
          overflowY: 'scroll'
        }}
      >
      <Switch>
        <Route path = '/train' component = {TrainDesktop}/>
      </Switch>
    </div>
  }
}

export default Train
