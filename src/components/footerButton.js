import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {activePage} from '../actions'

class FooterButton extends React.Component{
  static propTypes = {
    inactiveImgUrl: PropTypes.string,
    activeImgUrl: PropTypes.string,
    isActive: PropTypes.bool,
    navLink: PropTypes.string,
    name: PropTypes.string
  }

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(events){
    this.props.history.push(this.props.navLink)
    this.props.onClick()
  }

  render(){
    let backImg = this.props.isActive ? this.props.activeImgUrl: 
		    this.props.inactiveImgUrl
    console.log(backImg)
    return <div
  	  style = {{
	      width: '100%',
	      height: '100%'
	    }} 
    >
      <input 
        type = 'button'
	      style = {{
   	      backgroundImage: 'url("' + backImg + '")' + 'no-repeat center ',
	        backgroundColor: 'white',
	        border: '0px',
	        width: '100%',
	        height: '100%',
          outline: 'none'
	      }}
	      onClick = {this.onClick}
      />
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inactiveImgUrl: ownProps.inactiveImgUrl,
    activeImgUrl: ownProps.activeImgUrl,
    navLink: ownProps.navLink,
    isActive: ownProps.name == state.curPage,
    name: ownProps.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(activePage(ownProps.name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterButton))
