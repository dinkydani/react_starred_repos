import React, { Component } from 'react';

export default class PaginationBtn extends Component {
  render() {
    const {
      onClick,
      children
    } = this.props;
    return (
      <button className="repo__btn" onClick={onClick}>
        {children}
      </button>
    );
  }
}
