import React from 'react';
import './SpellList.css';
import Spell from './Spell';

export default class SpellList extends React.Component {
  render() {
    let spells = [];
    for (let spellId = 16 * this.props.page; spellId < 16 * (this.props.page + 1); spellId++) {
      spells.push(spellId);
    }
    spells = spells.map(spellId =>
      <Spell key={spellId} spellId={spellId} modifyState={this.props.modifyState} />
    );
    return (
      <div className="spellList">
        {spells}
      </div>
    )
  }
}