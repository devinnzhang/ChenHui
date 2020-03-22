import React, { Component, Fragment } from 'react'
import styles from '../Index.less'

import logo from '@/assets/logo.png'
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
                    <Col span={8}>
                        <div className={styles.left}>
                            <div className={styles.ftitle}>
                                JUICER
                            </div>
                            <ul className={styles.flist}>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={styles.middle}>
                            <div className={styles.ftitle}>
                                BLENDER
                            </div>
                            <ul className={styles.flist}>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                                <li><a>xxx</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className={styles.right}>
                            <img className={styles.logo} src={logo}/>
                            {/* <div className={styles.contact}>Contact Us</div> */}
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