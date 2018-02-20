import React from 'react'

class FullScreen extends React.Component{
  constructor(props){
    super(props)
    this._onBackClick = this._onBackClick.bind(this)
  }

  componentDidMount(){
    this.back.addEventListener('click', this._onBackClick, false)
  }

  _onBackClick(){
    navigator.app.backHistory()
  }

  render(){
    return <div
      style = {{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'green',
        zIndex: '9',
        position: 'absolute'
      }}
    >
      <div
        style = {{
          width: '50px',
          height: '45px',
          position: 'absolute',
          zIndex: '10',
          background: 'rgba(255,255,255,0)'
        }}
        ref = {node => this.back = node}
      >
        <img 
          src = 'img/back.png'
          style = {{
            width: '20px',
            height: '20px',
            margin: 'auto',
            display: 'block',
            position: 'relative',
            top: '10'
          }}
        />
      </div>
      {this.props.children}
    </div>
  }
}

export default FullScreen
