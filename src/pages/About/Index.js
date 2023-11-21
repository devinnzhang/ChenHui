import React, { Component, Fragment } from 'react';
import BreadCrumbBar from '@/components/BreadCrumbBar';
import Container from '@/components/Container';
import styles from './Index.less';

class About extends Component {
  constructor(props){
    super(props)
  }
  state = {
    dataSource: [],
    inputVal: ''
  }
  componentDidMount(){
  }
  render() {
    return <>
      <BreadCrumbBar title='About' />
      <Container>
        <div className={styles.about}>
          <p>
          Ningbo Chenhui Electric Appliance Co., Ltd is a manufacturer specialized in 
  production of kitchen appliance, including hand blender, table blender, food 
  processor, juicer and other small kitchen appliance. 
          </p>
          <p>
          The advantage for Chenhui
  are innovation, design and manufacture of kitchen appliance. With years of 
  experience in the manufacture and export of kitchen appliance, we are able to 
  complete buyers’ customized requirements in line with their supplied 
  specifications. 
          </p>
          <p>
          Chenhui can provide the services of market strategies, product 
  research and brand design, which can fullfill the one-stop purchase demand of 
  the international brands and retailers. Over years of hard working, creativity 
  and competition combined with strategies of low cost, advanced technology, 
  we have build business relations with buyers all over the world. 
          </p>
          <p>
          As a reliable 
  supplier of kitchen appliance, Chenhui is always following the core missions of 
  High Quality, Timely Delivery and Best Service, which are the guarantees for 
  our longterm cooperation. We wish to cooperate with customers from any 
  country and believe we will have a bright future！
          </p>
        </div>
      </Container>
    </>
  }
}

export default About;