import React,{Component } from 'react'

class Loading extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <div className='loadingbox' style = {{display: this.props.display}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default Loading
