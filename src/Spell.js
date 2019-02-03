import React from 'react';
import sources from "./sources";
import './Spell.css';

export default class Spell extends React.Component {
  render() {
    if (this.props.spellId < sources.spell.length) {
      return (
        <div className="spell">
          <div className="spellIcon"
               style={{
                 backgroundImage: `url(${sources.spell[this.props.spellId].icon})`,
                 marginBottom: 26
               }}
               onClick={() => this.props.modifyState({spell: this.props.spellId, spellPage:0})}
          />
        </div>
      );
    } else {
      return <div/>;
    }
  }
}