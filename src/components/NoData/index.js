import React, { PureComponent } from 'react';
import styles from './index.less';

export default class NoData extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const { title = '' } = this.props;
    const img = require('@/assets/nodata.png');
   return (
    <div className={styles.nodata}>
      <div className={styles.icon}>
        <span className={styles.img}></span>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
   )
  }
}
