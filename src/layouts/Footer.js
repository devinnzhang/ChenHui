import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      copyright={
        <GlobalFooter
            copyright={
                <Fragment>
                    <div style={{float: 'left', marginLeft: '180px'}}>NINGBO CHENHUI ELECTRIC APPLIANCE CO., LTD</div>
                    <div style={{float: 'right', marginRight: '180px'}}>Sibei Village, Simen Town, Yuyao, Zhejiang, China</div>
                </Fragment>
            }
        />
      }
    />
  </Footer>
);
export default FooterView;
