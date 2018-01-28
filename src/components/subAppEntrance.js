import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class SubAppEntrance extends React.Component{
  static propTypes = {
    data: PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
      navLink: PropTypes.string,
      para: PropTypes.object
    })
  }

  constructor(props){
    super(props)
    this._onImageTouchStart = this._onImageTouchStart.bind(this)
    this._onImageClick = this._onImageClick.bind(this)
    this._onImageTouchEnd = this._onImageTouchEnd.bind(this)
    this.state = {
      brightness: 'drop-shadow(0px 0px 0px gray)'
    }
  }

  _onImageTouchStart(){
    console.log('touch start')
    this.setState({
      brightness: ' drop-shadow(8px 8px 10px gray)'
    })
  }

  _onImageTouchEnd(){
    this.setState({
      brightness: ' drop-shadow(0px 0px 0px gray)'
    })
  }

  _onImageClick(){
  }

  componentDidMount(){
    this.img.addEventListener('touchstart', this._onImageTouchStart, false)
    this.img.addEventListener('touchend', this._onImageTouchEnd, false)
    this.img.addEventListener('click', this._onImageClick, false)
  }

  

  render(){
    return <div
        style = {{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }} 
      >
        <img
          src = {this.props.data.icon}
          style = {{
            flexGrow: '1',
            width: '80%',
            height: '80%',
            filter: this.state.brightness
          }}
          ref  = {ref => this.img = ref}
        />
        <label
          style = {{
            height: '12px',
            flexGrow: '0',
            textAlign: 'center',
            fontSize: '12px'
          }}
        >
          {this.props.data.name}
        </label> 
      </div>
  }
}

export default withRouter(SubAppEntrance)
