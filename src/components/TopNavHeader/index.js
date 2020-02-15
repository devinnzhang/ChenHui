import React, { PureComponent } from 'react';
import Link from 'umi/link';
import BaseMenu from '../SiderMenu/BaseMenu';
import styles from './index.less';
import { Avatar, Divider, Icon} from 'antd';

export default class TopNavHeader extends PureComponent {
  state = {
    maxWidth: undefined,
  };

  static getDerivedStateFromProps(props) {
    return {
      maxWidth: (props.contentWidth === 'Fixed' ? 1200 : window.innerWidth) - 280 - 165 - 40,
    };
  }
  render() {
    const { theme, contentWidth, logo , currentUser} = this.props;
    const { maxWidth } = this.state;
    return (
      <div className={`${styles.head} ${theme === 'light' ? styles.light : ''}`}>
        <div ref={ref => {this.maim = ref;}} className={`${styles.main} ${contentWidth === 'Fixed' ? styles.wide : ''}`}>
          <div className={styles.left}>
            <div className={styles.logo} key="logo" id="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div tyle={{maxWidth}}>
              <BaseMenu {...this.props} style={{ border: 'none', height: 70 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
