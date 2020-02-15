import React, { Component } from 'react';
import styles from './index.less';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    text: '',
  };
  onChange = e => {
    let { onChange } = this.props;

    let value = e.target.value;
    this.setState({
      text: value,
    });

    onChange(value);
  };

  render() {
    let { text } = this.state;
    let { onClick } = this.props;

    return (
      <div>
        <div className={styles.search_bar}>
          <a href="#" className={styles.look} />
          <input className={styles.input} type="text" value={text} onChange={this.onChange} />
          <span className={styles.search_btn} onClick={onClick.bind(this, text)}>
            搜索
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
