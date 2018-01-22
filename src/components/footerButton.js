import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class FooterButton extends React.Component{
  static propTypes = {
    inactiveImgUrl: PropTypes.string,
    activeImgUrl: PropTypes.string,
    isActive: PropTypes.bool,
    navLink: PropTypes.string
  }

  constructor(props){
    super(props)
  }

  onClick(events){
  
  }

  render(){
    let backImg = this.props.isActive ? this.props.activeImgUrl: 
		    this.props.inactiveImgUrl
    return <div
	style = {{
	  width: '100%',
	  height: '100%'
	}} 
      >
      <input 
        type = 'button',
	style = {{
   	  background: 'url(' + backImg + ')',
	  backgroundColor: 'white',
	  border: '0px',
	  width: '100%',
	  height: '100%'
	}}
	onClick = {this.onClick}
      />
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {

}

export default connect(mapStateToProps)(FooterButton)
