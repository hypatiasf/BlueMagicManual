import React from 'react';
import Stage0 from './Stage0';
import Stage1 from './Stage1';
import Stage2 from './Stage2';

class Manual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0
    };
    this.newStage = this.newStage.bind(this);
  }

  newStage(stage) {
    this.setState({stage});
  }

  render() {
    let content = <Stage0 changeStage={this.newStage} />;
    if (this.state.stage === 1) {
      content = <Stage1 changeStage={this.newStage} />;
    } else if (this.state.stage === 2) {
      content = <Stage2 />;
    } else content = <Stage2/>;
    return (
      <div className="manual">
        {content}
      </div>
    );
  }
}

export default Manual;