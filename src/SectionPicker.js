import React from 'react';
import './SectionPicker.css';

export default class SectionPicker extends React.Component {
  render() {
    let descriptions = [];
    for (let icon = 0; icon < this.props.descriptions.length; icon++) {
      descriptions.push(icon);
    }
    descriptions = descriptions.map((descriptionId) =>
      <div
        key={descriptionId}
        className="sectionIcon"
        style={{backgroundImage: `url(${this.props.descriptions[descriptionId].icon})`}}
        onClick={() => {this.props.modifyState({spellPage: descriptionId})}}
      />
    );
    return (
      <div className="section">
        {descriptions}
      </div>
    )
  }
}