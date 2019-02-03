import React from 'react';
import './Stage0.css';
import sources from './sources';

export default class Stage0 extends React.Component {
  render() {
    return (
      <div
        className="manual"
        style={{backgroundImage: `url(${sources.BookClosed})`}}
        onClick={() => this.props.changeStage(1)}
      />
    )
  }
}
