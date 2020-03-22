import React, { Component, Fragment } from 'react';
import Banner from './components/Banner'
import Products from './components/Products'
import Footer from './components/Footer'
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
        <Products></Products>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;