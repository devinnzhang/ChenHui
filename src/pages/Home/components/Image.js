import React, { Component, Fragment } from 'react'

class ZoomImage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    const {title} = this.props;  
    return (
      <a className='zoomImage'>
        <img {...this.props}/>
        {title ? <div className='title'>{title}</div> : ''}
      </a>
    );
  }
}

export default ZoomImage