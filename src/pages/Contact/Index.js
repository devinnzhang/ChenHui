import React, { Component, Fragment } from 'react';
import { Breadcrumb } from 'antd'
import styles from './Index.less'

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
    // var local = new BMap.LocalSearch(map, {
    //   renderOptions:{map: map}
    // });
    // local.search("泗北村工业园陈辉");
    }
  render() {
    return <div className={styles.contact}>
         {/* <Breadcrumb>
          <Breadcrumb.Item>Chenhui</Breadcrumb.Item>
          <Breadcrumb.Item>Contact Us</Breadcrumb.Item>
        </Breadcrumb> */}
        <div id="map" className={styles.map} ></div>

    </div>
  }
}

export default Contact;