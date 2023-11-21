import React, { Component, Fragment } from 'react'
import styles from '../Index.less'

class CompanyBrief extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    return (    
        <div className={styles.area_block} style={{padding: '60px 0 70px 0', backgroundColor: '#f8f8f8'}}>
        <div className={styles.container}>
          <div className={styles.title}>COMPANY BRIEF INTRODUCTION</div>
          {/* <div className={styles.title}>Company Brief Introduction</div> */}
          <div className={styles.divider}> </div>
          <div className={styles.companybrief} >
            <p>
              Ningbo Chenhui Electric Appliance Co., Ltd is a manufacturer specialized in production of kitchen appliance, including hand blender, table blender, food processor, juicer and other small kitchen appliance.
            </p>
            <p>
              The advantage for Chenhui are innovation, design and manufacture of kitchen appliance. With years of experience in the manufacture and export of kitchen appliance, we are able to complete buyers’ customized requirements in line with their supplied specifications.
            </p>
            <p>
              Chenhui can provide the services of market strategies, product research and brand design, which can fullfill the one-stop purchase demand of the international brands and retailers. Over years of hard working, creativity and competition combined with strategies of low cost, advanced technology, we have build business relations with buyers all over the world.
            </p>
            <p>
              As a reliable supplier of kitchen appliance, Chenhui is always following the core missions of High Quality, Timely Delivery and Best Service, which are the guarantees for our longterm cooperation. We wish to cooperate with customers from any country and believe we will have a bright future！
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyBrief