import React, { Component, Fragment } from 'react';
import { Row, Col, Divider, Card, Modal } from 'antd';
const { Meta } = Card;
import BreadCrumbBar from '@/components/BreadCrumbBar';
import Container from '@/components/Container';
import ActiveButtons from '@/components/ActiveButtons';
import PRODUCT_DATA from './ProductData';
import ProduceDetail from './ProductDetail';
import styles from './Index.less'

import { getPageQuery } from '@/utils/utils';

class Product extends Component {
  constructor(props){
    super(props)
  }
  state = {
    series: ['Stick Blender', 'Nutri Blender', 'Juicer'],
    active: 'Stick Blender', // default
    list: [],
    modalVisible: false,
    productDetailObj: {
      meta: '',// 型号
      base: '',
      optional: '',
      packing: [],
    },
    breadCrumbs: [
      {
        title: 'Home',
      },
      {
        title: 'Application Center',
        href: '',
      },
      {
        title: 'Application List',
        href: '',
      },
      {
        title: 'An Application',
      },
    ]
  }
  componentWillMount(){
    const { series } = getPageQuery();
    if (series) {
      let activeSeries = '';
      if (series === 'NutriBlender') {
        activeSeries = 'Nutri Blender';
      }
      else if (series === 'StickBlender') {
        activeSeries = 'Stick Blender';
      } 
      else {
        activeSeries = 'Juicer';
      }
      this.setState({
        active: activeSeries,
        list: PRODUCT_DATA[activeSeries] || []
      })
      return;
    }
    const { active } = this.state;
    this.setState({
      list: PRODUCT_DATA[active] || []
    });
  }
  handleClcikButton = (name) => {
    this.setState({
      active: name,
      list: PRODUCT_DATA[name] || []
    });
  }
  handleClickProduct = (data) => {
    if (data.info) {
      this.setState({ productDetailObj: data, modalVisible: true });
    }
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };
  render() {
    const { list, breadCrumbs, series, active, modalVisible, productDetailObj } = this.state
    return <>
      <BreadCrumbBar title='Product'  items={breadCrumbs} />
      <Container style={{margin: '10px 0'}}>
      <div style={{margin: '30px 0', textAlign: 'center'}}>
        <ActiveButtons items={series} active={active} click={this.handleClcikButton}/>
      </div>
      <div style={{margin: '30px 0 30px 0'}}>
        <Row gutter={[16, 24]}>
          {
            list.map(item => {
              return  <Col className="gutter-row" span={6} onClick={() => this.handleClickProduct(item)}>
                  <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="" src={item.img} className={styles.cardImg}/>}
                  >
                    <div >
                      <span style={{float: 'left', fontWeight: 'bold'}}>{item.meta}</span>
                      <span style={{float: 'right'}}>
                        <a>...Read More</a>
                      </span>
                    </div>
                  </Card>
                </Col>
            })
          }
        </Row>
      </div>
      <Modal title={productDetailObj.meta} visible={modalVisible} footer={[]} onCancel={this.handleCancel} width='850px'>
        <ProduceDetail data={productDetailObj}/>
      </Modal>  
      </Container>
    </>
  }
}

export default Product;