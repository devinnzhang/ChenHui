import React, { Component, Fragment } from 'react';
import styles from './index.less';
import classNames from 'classnames';

class ActiveButtons extends Component {
  constructor(props){
    super(props)
  }
  state = {
    active: '',
  }
  componentDidMount(){
    const { active } = this.props;
    if (active) {
        this.setState({ active });
    }
  }
  handleClick(name) {
    const { click } = this.props;
    this.setState({ active: name });
    // 触发父组件click事件
    if (click) {
        click(name);
    }
  }
  render() {
    const { active } = this.state;
    const { items = [] } = this.props;
    return <div className={styles.activeButtons}>
        {
            items.map((name) => {
                return <a onClick={() => this.handleClick(name)} className={classNames({[styles.active]: active === name, [styles.abtn]: true})}>{name}</a>
            })
        }
    </div>
  }
}

export default ActiveButtons;