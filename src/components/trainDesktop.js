import React from 'react'
import Desktop from './desktop'

const testContentList = [
  {
    icon: 'img/game.png',
    name: '静态靶训练',
    navLink: 'train/game0',
    para: {}
  },
]

class TrainDesktop extends React.Component{
  render(){
    return <Desktop
          contentList = {testContentList}
          column = {3}
        />
  } 
}

export default TrainDesktop
