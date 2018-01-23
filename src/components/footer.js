import React from 'react'
import FooterButton from './footerButton'


class Footer extends React.Component{
  render(){
    return <div
      style = {{
        display: 'flex',
	      flexDirection: 'row',
	      boxSizing: 'border-box',
	      borderTop: '1px solid #f0f0f0',
        width: '100%',
        height: '100%'
      }}		  
    >
      <div
        style = {{
	        flexGrow: '1'
	      }}		  
      >
	      <FooterButton 
	        name = 'Home'
          inactiveImgUrl = './img/home_inactive.png'
          activeImgUrl = './img/home_active.png'
          navLink = '/home'
	      />
      </div>
      <div
  	    style = {{
	        flexGrow: '1'
	      }} 
      >
	      <FooterButton 
	        name = 'Train'
          inactiveImgUrl = './img/train_inactive.png'
          activeImgUrl = './img/train_active.png'
          navLink = '/train'
	      />
      </div>
      <div
	      style = {{
	        flexGrow: '1'
	      }} 
      >
	      <FooterButton 
	        name = 'User'
          inactiveImgUrl = './img/user_inactive.png'
          activeImgUrl = './img/user_active.png'
          navLink = '/user'
	      />
      </div>

    </div>
  }
}

export default Footer
