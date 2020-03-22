import React, { Component, Fragment } from 'react';
import { Row, Col, Divider, Card, Breadcrumb } from 'antd';
const { Meta } = Card;

import img1 from '@/assets/juicer/YTZ-001.jpg'
import img2 from '@/assets/juicer/YTZ-001A.jpg'
import img3 from '@/assets/juicer/YTZ-002.jpg'
import img4 from '@/assets/juicer/YTZ-003.jpg'
import img5 from '@/assets/juicer/YTZ-003A.jpg'

class Juicer extends Component {
  constructor(props){
    super(props)
  }
  state = {
    blenders: [
      {
        img: img1,
        meta: 'YTZ-001'
      },
      {
        img: img2,
        meta: 'YTZ-001A'
      },
      {
        img: img3,
        meta: 'YTZ-002'
      },
      {
        img: img4,
        meta: 'YTZ-003'
      },
      {
        img: img5,
        meta: 'YTZ-003A'
      }
    ],
  }
  componentDidMount(){
  }
  render() {
    // const Cards = ()=>{
    //   const blenders = this.state
    // }

    const { blenders } = this.state

    return <>
      <Breadcrumb>
        <Breadcrumb.Item>Chenhui</Breadcrumb.Item>
        <Breadcrumb.Item>Products</Breadcrumb.Item>
        <Breadcrumb.Item>Juicers</Breadcrumb.Item>
      </Breadcrumb>

      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}></Divider>

      <Row gutter={[16, 24]}>
        {
          blenders.map(item => {
              return  <Col className="gutter-row" span={6}>
                  <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="" src={item.img} />}
                  >
                    <div >
                      <span style={{float: 'left'}}>{item.meta}</span>
                      <span style={{float: 'right'}}>
                        <a>...Read More</a>
                      </span>
                    </div>
                  </Card>
                </Col>
          })
        }
      </Row>
    </>
  }
}

export default Juicer;