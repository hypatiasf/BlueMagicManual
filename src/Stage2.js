import React from 'react';
import sources from "./sources";

export default class Stage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      spell: 0,
      spellPage: 0
    }
  }

  render() {
    return (
      // Manual Background
      <div className="manual" style={{backgroundImage: `url(${sources.Book})`}}>
        {/*Spell descriptions*/}
        <div className="manual">

        </div>
      </div>
    )
  }
}