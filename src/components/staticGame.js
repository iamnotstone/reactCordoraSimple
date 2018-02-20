import React from 'react'
import FullScreen from './fullScreen'

class StaticGame extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <FullScreen>
      <div
        style = {{
          margin: 'auto',
          textAlign: 'center',
          position: 'relative',
          top: '30vh'
        }}
      >
        StaticGame
      </div>
    </FullScreen>
  }
}

export default StaticGame
