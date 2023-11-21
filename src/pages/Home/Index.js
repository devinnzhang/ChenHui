import React, { Component, Fragment } from 'react';
import Banner from './components/Banner'
import ProductSeries from './components/ProductSeries'
import Products from './components/Products'
import CompanyBrief from './components/CompanyBrief';
import Footer from '@/layouts/Footer'
import styles from './Index.less'

class HomePage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    return (    
      <div className={styles.homePage }>
        <Banner></Banner>
        <ProductSeries></ProductSeries>
        <CompanyBrief></CompanyBrief>
        <Products></Products>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;