import React, { Component, Fragment } from 'react';
import styles from './LinkBox.less';
// import { Icon } from 'antd';

class LinkBox extends Component {
  constructor(props){
    super(props)
  }
  state = {
    
  }
  componentDidMount(){
  }
  render() {
    return <div className={styles.linkBox}>
        <span className={styles.item}>
          <i className='iconfont icon-daohangdizhi' style={{ fontSize: '26px'}}></i>
          <div>
          No.148-1, Xinlang Road, Langxia Street, Yuyao, Ningbo, Zhejiang, China
          </div>
        </span>
        <span className={styles.item}>
          <i className='iconfont icon-mobile-screen' style={{ fontSize: '26px'}}></i>
          <div>
          0086-15867590717
          </div>
        </span>
        <span className={styles.item}>
          <i className='iconfont icon-dianhua-F' style={{ fontSize: '26px'}}></i>
          <div>
          0086-574-62638188
          </div>
        </span>
        <span className={styles.item}>
          <i className='iconfont icon-email' style={{ fontSize: '26px'}}></i>
          <div>
          sales@cnchenhui.com
          </div>
        </span> 
    </div>
  }
}

export default LinkBox;