import React from 'react';
import './Stage1.css';
import sources from './sources';

export default class Stage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'Cn'
    };
    this.getImage = this.getImage.bind(this);
  }

  getImage(image) {
    return sources[image + this.state.language];
  }

  getLanguageLogo(language) {
    return this.state.language === language ? sources[language + 'Activated'] : sources[language];
  }

  render() {
    return (
      <div className="manual" style={{backgroundImage: `url(${sources.BookOpened})`}}>
        <div className="manual" style={{backgroundImage: `url(${this.getImage('Foreword')})`}}>
          <div className="page" />
          <div className="page">
            <div className="messageBox" style={{backgroundImage: `url(${this.getImage('MessageBox')})`}}>
              <div className="messageBoxButton"
                   style={{backgroundImage: `url(${this.getImage('Yes')})`}}
                   onClick={() => this.props.changeStage(2)} />
            </div>
            <div className="languageSelector">
              <div className="languageLogo"
                   style={{backgroundImage: `url(${this.getLanguageLogo('Cn')})`}}
                   onClick={() => this.setState({language: 'Cn'})} />
              <div className="languageLogo"
                   style={{backgroundImage: `url(${this.getLanguageLogo('Jp')})`}}
                   onClick={() => this.setState({language: 'Jp'})} />
              <div className="languageLogo"
                   style={{backgroundImage: `url(${this.getLanguageLogo('En')})`}}
                   onClick={() => this.setState({language: 'En'})} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}