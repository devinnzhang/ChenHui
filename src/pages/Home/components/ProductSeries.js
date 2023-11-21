import React, { Component, Fragment } from 'react'
import styles from '../Index.less'
import seriesStyles from './ProductSeries.less'
import { router } from 'umi';
console.log('router', router);

// import juicerImg from '@/assets/juicer.jpg'
// import blenderImg from '@/assets/blender.jpg'
// import sticBlenderImg from '@/assets/stick_blender.jpg'


import stickBlenderImg1 from '@/assets/blender/CHB-001.jpg'
// import stickBlenderImg2 from '@/assets/blender/CHB-002.jpg'
// import stickBlenderImg3 from '@/assets/blender/CHB-003.jpg'
// import stickBlenderImg4 from '@/assets/blender/CHB-004.jpeg'
// import stickBlenderImg5 from '@/assets/blender/CHB-005.jpg'
// import stickBlenderImg6 from '@/assets/blender/CHB-006.jpg'
// import stickBlenderImg7 from '@/assets/blender/CHB-007.jpg'
// import stickBlenderImg8 from '@/assets/blender/CHB-008.jpg'
// import stickBlenderImg9 from '@/assets/blender/CHB-009.jpeg'
// import stickBlenderImg10 from '@/assets/blender/CHB-010.jpg'
// import stickBlenderImg11 from '@/assets/blender/CHB-011.jpg'
// import stickBlenderImg12 from '@/assets/blender/CHB-012.jpg'
// import stickBlenderImg13 from '@/assets/blender/CHB-013.jpg'
// import stickBlenderImg15 from '@/assets/blender/CHB-015.jpg'

// import nutriBlenderImg1 from '@/assets/blender/CBL-201.jpeg'
import nutriBlenderImg1 from '@/assets/blender/CBL-201.jpg'
// import nutriBlenderImg2 from '@/assets/blender/CBL-202.jpg'
// import nutriBlenderImg3 from '@/assets/blender/CBL-203.jpg'
// import nutriBlenderImg4 from '@/assets/blender/CBL-204.jpg'
// import nutriBlenderImg5 from '@/assets/blender/CBL-205.jpg'

import juicerImg301A from '@/assets/juicer/CHZ-301A.jpeg'
// import juicerImg302D from '@/assets/juicer/CHZ-302D.jpeg'
// import juicerImg303D from '@/assets/juicer/CHZ-303D.jpg'
// import juicerImg304D from '@/assets/juicer/CHZ-304D.jpg'


// import Container from '@/components/Container'

// import Link from 'umi/link'

import ZoomImage from './Image'

class ProductSeries extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  handleClick = (item) => {
    
    router.push({
      pathname: 'product',
      query: {
        series: item,
      },
    })
  }
  render() {
    return (    
      <div className={styles.area_block} style={{padding: '60px 0 70px 0'}}>
        <div className={styles.container}>
          <div className={styles.title}>PRODUCT SERIES</div>
          {/* <div className={styles.title}>Product Series</div> */}
          <div className={styles.divider}> </div>
          <div className={seriesStyles.container}>
              <div className={seriesStyles.imageBox} onClick={() => this.handleClick('StickBlender')}>

                {/* <Link to={{ pathname: '/product', state: { key: 'value' } }}> */}
                  <div className={seriesStyles.title}>Stick Blender</div>
                  <img className={seriesStyles.image} src={stickBlenderImg1} alt="Stick Blender"/> 
                  {/* </Link> */}
              </div>
              <div className={seriesStyles.imageBox} onClick={() => this.handleClick('NutriBlender')}>
                  <div className={seriesStyles.title}>Nutri Blender</div>
                  <img className={seriesStyles.image} src={nutriBlenderImg1} alt="Nutri Blender"/>  
              </div>
              <div className={seriesStyles.imageBox} onClick={() => this.handleClick('Juicer')}>
                  <div className={seriesStyles.title}>Juicer</div>
                  <img className={seriesStyles.image} src={juicerImg301A} alt="Juicer"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSeries