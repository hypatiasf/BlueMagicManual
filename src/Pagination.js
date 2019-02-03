import React from 'react';
import sources from "./sources";
import './Pagination.css';

export default class Pagination extends React.Component {
  render() {
    let pageNumbers = [];
    for (let number = 0; number < sources.pagination.length; number++) {
      pageNumbers.push(number);
    }
    pageNumbers = pageNumbers.map((number) => {
      let pageNumber = number === this.props.page ?
        sources.pagination[number].activated : sources.pagination[number].normal;
      return <div
        className="pageNumber"
        key={number}
        style={{backgroundImage: `url(${pageNumber})`}}
        onClick={() => this.props.modifyState({page: number, spell: -1})}
      />;
    });
    return (
      <div className="pagination" style={this.props.style}>
        {pageNumbers}
      </div>
    );
  }
}