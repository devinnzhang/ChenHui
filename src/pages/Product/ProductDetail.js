import React, { Component, Fragment } from 'react'
import styles from './ProductDetail.less';
import classNames from 'classnames';

class ProduceDetail extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
  }
  render() {
    const { data } = this.props;
    console.log('data', data)
    const info = data.info || {};
    return (    
      <div className={styles.productDetail}>
        <p className={classNames({[styles.bar]: true})}>{data.meta}</p>
        <pre>{info.base}</pre>
        {info.optional && <Fragment>
          <p className={classNames({[styles.bar]: true})}>OPTIONAL ATTACHMENTS</p>
          <pre>{info.optional}</pre>
        </Fragment>}
        <p className={classNames({[styles.bar]: true})}>PACKING INFORMATION</p>
        {
          info.packing&& info.packing.map(({ label, value }) => {
            return <div><span className={styles.label}>{label}</span><span className={styles.value}>{value}</span></div>
          }) 
        }
      </div>
    );
  }
}

export default ProduceDetail