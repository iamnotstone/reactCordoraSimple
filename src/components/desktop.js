import React from 'react'
import PropTypes from 'prop-types'
import SubAppEntrance from './subAppEntrance'

class Desktop extends React.Component{
  static propTypes = {
    contentList: PropTypes.array,
    column: PropTypes.number
  }

  constructor(props){
    super(props)
    this.state = {
      components : []
    }
  }

  generateContent(){
    let key = 0
    let result = this.props.contentList.map(content => {
      return <div
          key = {key ++}
          style = {{
	          boxSizing: 'border-box',
            padding: '2px',
            width: this.desktopWidth / this.props.column + 'px',
            height: this.desktopWidth / this.props.column + 12 + 'px',
	        }}
        >
          <SubAppEntrance data = {content}/>
        </div>
    })
    return result
  }

  componentDidMount(){
    this.desktopWidth = this.node.clientWidth
    this.setState({
      components: this.generateContent()
    })
  }

  render(){
    return <div
      style = {{
        display: 'flex',
	      flexWrap: 'wrap',
	      margin: '0px',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        flexGrow: '1'
      }}
      ref = {node => this.node = node}
    >
      {this.state.components}
    </div>
  }
}

export default Desktop
