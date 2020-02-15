import React, { Component, Fragment } from 'react'
// import classNames from 'classnames/bind'
import { Carousel, Icon } from 'antd'

import bannerImg1 from '@/assets/banner_1.jpeg'
import bannerImg2 from '@/assets/banner_2.jpeg'

import styles from './Banner.less'

class Banner extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  handlePrev = ()=>{
      debugger;
    this.refs.img.prev(); //ref = img
  }
  handleNext = ()=>{
    this.refs.img.next();
  }
  render() {
    return (
        <div className={styles.ch_carousel}>
            <a type="left" onClick={this.handlePrev} className={styles.bar_left}/>
            <a type="right" onClick={this.handleNext} className={styles.bar_right}/>
            <Carousel autoplay ref="img">
                <div>
                    <img src={bannerImg1} style={{width: '100%', height: '600px'}}/>
                </div>
                <div>
                    <img src={bannerImg2} style={{width: '100%', height: '600px'}}/>
                </div>
            </Carousel>
        </div>
    );
  }
}

export default Banner