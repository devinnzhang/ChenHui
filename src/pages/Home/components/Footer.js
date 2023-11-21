import React, { Component, Fragment } from 'react'
import styles from '../Index.less'

import logo from '@/assets/logo.jpg'
import juicerImg from '@/assets/juicer.jpg'
import blenderImg from '@/assets/blender.jpg'
import sticBlenderImg from '@/assets/stick_blender.jpg'

import GlobalFooter from '@/components/GlobalFooter'
import { Row, Col } from 'antd'

import ZoomImage from './Image'

class Products extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    return (
          <div className={styles.footer}>
            <div className={styles.container}>
                <Row>
                    <Col span={6}>
                        <div className={styles.left}>
                            <div className={styles.ftitle}>
                                HAND BLENDER
                            </div>
                            <ul className={styles.flist}>
                                <li><a>CHB-001</a></li>
                                <li><a>CHB-002</a></li>
                                <li><a>CHB-003</a></li>
                                <li><a>CHB-004</a></li>
                                <li><a>CHB-005</a></li>
                                <li><a>...</a></li>
                                <li><a>CHB-019</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.left}>
                            <div className={styles.ftitle}>
                                NUTRI BLENDER
                            </div>
                            <ul className={styles.flist}>
                                <li><a>CBL-201</a></li>
                                <li><a>CBL-202</a></li>
                                <li><a>CBL-203</a></li>
                                <li><a>CBL-204</a></li>
                                <li><a>CBL-205</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.middle}>
                            <div className={styles.ftitle}>
                                JUICER
                            </div>
                            <ul className={styles.flist}>
                                <li><a>CHZ-301D</a></li>
                                <li><a>CHZ-302D</a></li>
                                <li><a>CHZ-303</a></li>
                                <li><a>CHZ-304</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.right}>
                            <img className={styles.logo} src={logo}/>
                            <div className={styles.contact}>Contact Us</div>
                            <div>
                                <span className={styles.qrcode}>
                                   
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={styles.bottom}>
                    <div className={styles.container}>
                    <GlobalFooter
                        copyright={
                            <Fragment>
                                <div style={{float: 'left'}}>NINGBO CHENHUI ELECTRIC APPLIANCE CO., LTD</div>
                                <div style={{float: 'right'}}>Sibei Village, Simen Town, Yuyao, Zhejiang, China | Tel/Fax: 0086-574-83098582 | Mob: 0086-15867590717 | Skype: ZhangRyan</div>
                            </Fragment>
                        }
                    />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Products