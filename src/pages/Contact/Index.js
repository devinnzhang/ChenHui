import React, { Component, Fragment } from 'react';
import { Breadcrumb } from 'antd'
import styles from './Index.less'
import BreadCrumbBar from '@/components/BreadCrumbBar';
import Container from '@/components/Container';
import LinkBox from './LinkBox';

class Contact extends Component {
  constructor(props){
    super(props)
  }
  state = {
    dataSource: [],
    inputVal: ''
  }
  componentDidMount(){
    // 百度地图API功能
    var map = new BMap.Map("map");          
    map.centerAndZoom(new BMap.Point(121.037145,30.172274), 11);
    var local = new BMap.LocalSearch(map, {
      renderOptions:{map: map}
    });
    local.search("浙江省宁波市余姚市欣朗路148-1号");
  }
  render() {
    return <div className={styles.contact}>
      <BreadCrumbBar title='Contact' />
      <Container>
        <div className={styles.linkBox}>
          <LinkBox/>
        </div>
        <div id="map" className={styles.map} ></div>
      </Container>
    </div>
  }
}

export default Contact;