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
	    
	/>
      </div>
      <div
  	style = {{
	  flexGrow: '1'
	}} 
      >
      </div>
      <div
	style = {{
	  flexGrow: '1'
	}} 
      >
      </div>

    </div>
  }
}
