import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component{
  render(){
    return 
    <div
      style = {{
        display: 'flex',
	flexDirection: 'column',
        height: '100%',
	width: '100%'
      }}		  
    >
      <div
        style = {{
	  flexGrow: '1',
	  width: '100%'
	}}		  
      >
      </div>
      <div
        style = {{
	  flexGrow: '0',
	  width: '100%',
	  height: '20px',
	}}		  
      >
      </div>
    </div>
  }
}
