import React from 'react';
import sources from "./sources";
import './Stage2.css';
import Pagination from './Pagination';
import SpellList from './SpellList';
import SectionPicker from './SectionPicker';

export default class Stage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      spell: -1,
      spellPage: 0
    };
    this.modifyState = this.modifyState.bind(this);
  }

  modifyState(object) {
    this.setState(object)
  }

  render() {
    let spellDescription = '';
    let sectionPicker = '';
    if (this.state.spell > -1) {
      spellDescription = sources.spell[this.state.spell].description;
      if (Array.isArray(spellDescription)) {
        sectionPicker = <SectionPicker descriptions={spellDescription} modifyState={this.modifyState} />;
        spellDescription = spellDescription[this.state.spellPage].content;
      }
    }
    return (
      // Manual Background
      <div className="manual" style={{backgroundImage: `url(${sources.Book})`}}>
        {/*Spell descriptions*/}
        <div className="manual" style={{
          backgroundImage: `url(${spellDescription})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right'
        }}>
          <div className="manual" style={{
            backgroundImage: `url(${sources.spellId[this.state.page]})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left'
          }}>
            {/*left*/}
            <div className="page leftPage">
              <Pagination style={{marginBottom: 17}} page={this.state.page} modifyState={this.modifyState} />
              <SpellList page={this.state.page} modifyState={this.modifyState} />
            </div>
            {/*right*/}
            <div className="page rightPage">
              {sectionPicker}
            </div>
          </div>
        </div>
      </div>
    )
  }
}