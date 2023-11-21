// import React, { Fragment } from 'react';
// import { Layout, Icon } from 'antd';
// import GlobalFooter from '@/components/GlobalFooter';

// const { Footer } = Layout;
// const FooterView = () => (
//   <Footer style={{ padding: 0 }}>
//     <GlobalFooter
//       copyright={
//         <GlobalFooter
//             copyright={
//                 <Fragment>
//                     <div style={{float: 'left', marginLeft: '180px'}}>NINGBO CHENHUI ELECTRIC APPLIANCE CO., LTD</div>
//                     <div style={{float: 'right', marginRight: '180px'}}>Sibei Village, Simen Town, Yuyao, Zhejiang, China</div>
//                 </Fragment>
//             }
//         />
//       }
//     />
//   </Footer>
// );
// export default FooterView;


import React, { Component, Fragment } from 'react'
import styles from './Footer.less'

import logo from '@/assets/logo.jpg'
import juicerImg from '@/assets/juicer.jpg'
import blenderImg from '@/assets/blender.jpg'
import sticBlenderImg from '@/assets/stick_blender.jpg'

import GlobalFooter from '@/components/GlobalFooter'
import { Row, Col } from 'antd'
import Container from '@/components/Container'

class Footer extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    return (
          <div className={styles.footer}>
            <Container>
            <div className={styles.container}>
                <div className={styles.infoBlock}>
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
                                {/* <div className={styles.contact}>Contact Us Wechat：</div> */}
                                <div>
                                    <span className={styles.qrcode}>
                                    
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.container}>
                    <GlobalFooter
                        copyright={
                            <Fragment>
                                <div>All rights reserved © 2020 Ningbo Chenhui Electric Appliance Co., Ltd.</div>
                            </Fragment>
                        }
                    />
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
  }
}

export default Footer