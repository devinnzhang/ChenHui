import React, { Component, Fragment } from 'react';
import { Row, Col, Divider, Card, Breadcrumb } from 'antd';
const { Meta } = Card;

import img1 from '@/assets/blender/CBL-001-BLENDER.jpg'
import img2 from '@/assets/blender/CBL-002.jpg'
import img3 from '@/assets/blender/CHB-001-SET.jpg'
import img4 from '@/assets/blender/CHB-002-SET.jpg'
import img5 from '@/assets/blender/CHB-003-SET.jpg'
import img6 from '@/assets/blender/CHB-005-SET.jpg'
import img7 from '@/assets/blender/CHB-006-SET.jpg'
import img8 from '@/assets/blender/CHB-007-SET.jpg'
import img9 from '@/assets/blender/YTL-100-01.jpg'
import img10 from '@/assets/blender/YTL-100-02.jpg'
import img11 from '@/assets/blender/YTS-001.jpg'
import img12 from '@/assets/blender/YTS-001S.jpg'



class Blender extends Component {
  constructor(props){
    super(props)
  }
  state = {
    blenders: [
      {
        img: img1,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img2,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img3,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img4,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img5,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img6,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img7,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img8,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img9,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img10,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img11,
        meta: 'CBL-001-BLENDER'
      },
      {
        img: img12,
        meta: 'CBL-001-BLENDER'
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
        <Breadcrumb.Item>Blenders</Breadcrumb.Item>
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

export default Blender;