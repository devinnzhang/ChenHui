import React, { PureComponent } from 'react';
import styles from './index.less';
import { Breadcrumb } from 'antd';

export default class BreadCrumbBar extends PureComponent {
  constructor(props){
    super(props)
  }
  render() {
    const { title = '', items } = this.props;
    
   return (
    <div className={styles.breadCrumb}>
        <div className={styles.container}>
            <h3 className={styles.infoBlock}>
              {title}
            </h3>
            {/* <Breadcrumb
              separator=">"
              items={[
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
              ]}
            /> */}
            <span className={styles.position}>
              {/* {JSON.stringify(items)} */}
            
            </span>
        </div>
    </div>
   )
  }
}