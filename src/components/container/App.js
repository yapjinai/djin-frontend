import React, { Component } from 'react';
import '../../css/App.css';
import Channels from './Channels';
import Master from './Master';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Channels />
        <Master />
      </div>
    );
  }
}

export default App;
