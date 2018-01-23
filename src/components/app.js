import React from 'react'
import Footer from './footer'

class App extends React.Component{
  componentWillMount(){
    document.addEventListener('backbutton', this._onBackButton, false)
  }


  _onBackButton(){
    if(/#\/(train|user|home|)$/g.test(window.location.href))
      navigator.app.exitApp()
  }

  render(){
    return (<div
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
        {this.props.children}
      </div>
      <div
        style = {{
	        flexGrow: '0',
	        width: '100%',
	        height: '45px',
	      }}		  
      >
        <Footer />
      </div>
    </div>
    )
  }
}

export default App
       // {this.props.children}
       //
       // <Footer />
