import React, {Component, PropTypes} from 'react';
import styles from './Counter.css';
import classNames from 'classnames';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router';

class Counter extends Component {

  static propTypes = {
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }

  handleLinkClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  handleIncrementClick (incrementCount, event) {
    this.handleLinkClick(event);
    incrementCount();
  }

  handleDecrementClick(decrementCount, event) {
    this.handleLinkClick(event);
    decrementCount();
  }

  render () {
    const {
      count,
      incrementCount,
      decrementCount
    } = this.props;

    const meta = {
      title: 'Counter',
      description: 'I wow am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

    return (
      <div>
        <div className={styles.counterContainer}>
          <DocumentMeta {...meta} />
          <div className={styles.counter}>{count}</div>
          <a className={classNames(styles.button, styles.positive)} onClick={this.handleIncrementClick.bind(this, incrementCount)}>+</a>
          <a className={classNames(styles.button, styles.negative)} onClick={this.handleDecrementClick.bind(this, decrementCount)}>-</a>
        </div>

        <div className="center">
          <Link to='/'>Go to Home</Link>
        </div>
      </div>
    )
  }
}

export default Counter;
