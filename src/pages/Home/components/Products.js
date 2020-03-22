import React, { Component, Fragment } from 'react'
import styles from '../Index.less'

import juicerImg from '@/assets/juicer.jpg'
import blenderImg from '@/assets/blender.jpg'
import sticBlenderImg from '@/assets/stick_blender.jpg'

import ZoomImage from './Image'

class Products extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    return (    
      <div className={styles.area_block} style={{padding: '60px 0 70px 0'}}>
        <div className={styles.container}>
          <div className={styles.title}>PRODUCTS</div>
          <div className={styles.divider}> </div>
          <ul className={styles.card}>
              <li>
                <div className={styles.image}>
                  <ZoomImage src={sticBlenderImg} title='Stick Blender'/>
                </div>
              </li>
              <li style={{marginLeft: '30px'}}>
                <div className={styles.image}>
                  <ZoomImage src={juicerImg} title='Blender'/>
                </div>
              </li>
              <li style={{marginLeft: '30px'}}>
                <div className={styles.image}>
                  <ZoomImage src={blenderImg} title='Juicer'/>
                </div>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Products