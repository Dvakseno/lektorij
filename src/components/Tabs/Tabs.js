import React, { Component } from 'react';

import classes from './Tabs.css';

class Tabs extends Component {
  state = {
    activeTab: this.props.children[0].props.title
  };
  render() {
    return (
      <div className={classes.Tabs}>
        <div className={classes.TitleWrapper}>
          {this.props.children.map(item => (
            <div
              onClick={() => this.tabChangeHandler(item.props.title)}
              key={item.props.title}
              className={
                item.props.title === this.state.activeTab
                  ? [classes.Title, classes.TitleActive].join(' ')
                  : classes.Title
              }
            >
              {item.props.title}
            </div>
          ))}
        </div>
        {this.props.children.map(
          item =>
            item.props.title === this.state.activeTab ? (
              <div key={item.props.title}>{item}</div>
            ) : null
        )}
      </div>
    );
  }

  tabChangeHandler = value => {
    this.setState({ activeTab: value });
  };
}

export default Tabs;
