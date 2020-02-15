import React, { Component, Fragment } from 'react'
import styles from '../Index.less'

import juicerImg from '@/assets/juicer.jpeg'
import blenderImg from '@/assets/blender.jpeg'

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
              <li style={{marginLeft: '180px'}}>
                <div className={styles.image}>
                  <ZoomImage src={juicerImg} title='Juicer'/>
                </div>
              </li>
              <li style={{marginLeft: '40px'}}>
                <div className={styles.image}>
                  <ZoomImage src={blenderImg} title='Blender'/>
                </div>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Products