import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import { Row, Col } from 'antd';
import Link from 'umi/link';
import router from 'umi/router';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './Index.less';

import logo from '@/assets/logo.png';



import { AutoComplete, Input, Icon } from 'antd';
import Item from 'antd/lib/list/Item';

import Banner from './components/Banner'
import Products from './components/Products'

const { TextArea } = Input;

let cs = classNames.bind(styles);


function onSelect(value) {
    console.log('onSelect', value);
}

class HomePage extends Component {
  constructor(props){
    super(props)
  }
  state = {
    dataSource: [],
    inputVal: ''
  }
  componentDidMount(){
  }

  onSearchClick = (val) => {
    router.push({
        pathname: '/index', 
        query: {
            p: this.state.inputVal
        }
    });
  }

  onSearchChange = (val) => {
    this.setState({ inputVal: val });
  }

  mouseEnter = (e, cs)=> {
      const target = e.target;
      const li = this.iterateNode(target, 'li');
      console.log(li)
      if(li){
        
        li.parentNode.childNodes && li.parentNode.childNodes.forEach(element => {
            if(element != target){
                element.className = '';
            } 
        });
        li.className = cs;
      }
  }
  iterateNode(node, nodeName){
    if(node.nodeName.toLowerCase() == nodeName){
        return node;
    }
    return this.iterateNode(node.parentNode, nodeName);
  }

  render() {

    const { dataSource } = this.state;
    return (    
      <div className={styles.homePage }>
        <Banner></Banner>
        <Products></Products>
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
                                <div style={{float: 'left', marginLeft: '180px'}}>NINGBO CHENHUI ELECTRIC APPLIANCE CO., LTD</div>
                                <div style={{float: 'right', marginRight: '180px'}}>Sibei Village, Simen Town, Yuyao, Zhejiang, China</div>
                            </Fragment>
                        }
                    />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default HomePage;