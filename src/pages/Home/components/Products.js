import React, { Component, Fragment } from 'react'
import styles from '../Index.less'
import { Card, Icon } from 'antd'
const { Meta } = Card;

import juicerImg from '@/assets/juicer.jpg'
import blenderImg from '@/assets/blender.jpg'
import sticBlenderImg from '@/assets/stick_blender.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper'; 
SwiperCore.use([Autoplay, Navigation]);

// import 'swiper/swiper.less'; // core Swiper
import 'swiper/swiper-bundle.css'

// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

// import { Swiper, SwiperSlide } from 'react-swipeable';
import classNames from 'classnames';

import PRODUCT_DATA from '@/pages/Product/ProductData';
import Item from 'antd/lib/list/Item';

class Products extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {

    const stickBlenders = PRODUCT_DATA['Stick Blender'];

    return (    
      <div className={styles.area_block} style={{padding: '60px 0 70px 0'}}>
        <div className={styles.container} style={{overflow: 'visible'}}>
          <div className={styles.title}>HOT PRODUCTS</div>
          <div className={styles.divider}> </div>
          <span className={styles.prev}>
            <i className={classNames({'iconfont': true, 'icon-left-square': true, [styles.navIcon]: true})}></i>
          </span>
          <span className={styles.next}>
            <i className={classNames({'iconfont': true, 'icon-right-square': true, [styles.navIcon]: true})}></i>
          </span>
          <div className={styles.swiper}>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false}}
            navigation={{ prevEl: `.${styles.prev}`, nextEl: `.${styles.next}` }}
          >

            {
              stickBlenders && stickBlenders.map(({ img, meta }) => {
                return <SwiperSlide>
                  <img alt="" src={img} className={styles.cardImg}/>
                  <p className={styles.cardMeta} style={{}}>{meta}</p>
                </SwiperSlide>
              })
            }
            {/* <SwiperSlide><img style={{width: '280px',border: '1px solid #666', height: 'auto'}} alt="" src={sticBlenderImg} className={styles.cardImg}/></SwiperSlide>
            <SwiperSlide><img style={{width: '280px',border: '1px solid #666',height: 'auto'}} alt="" src={sticBlenderImg} className={styles.cardImg}/></SwiperSlide>
            <SwiperSlide><img style={{width: '280px',border: '1px solid #666',height: 'auto'}} alt="" src={sticBlenderImg} className={styles.cardImg}/></SwiperSlide>
            <SwiperSlide><img style={{width: '280px',border: '1px solid #666',height: 'auto'}} alt="" src={blenderImg} className={styles.cardImg}/></SwiperSlide> */}
          </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Products