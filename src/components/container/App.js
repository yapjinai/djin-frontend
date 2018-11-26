import React, { Component } from 'react';
import '../../css/App.css';
import Channel from './Channel';

import Master from './Master';
// import Channels from './Channels';

// const apiUrl = 'http://localhost:3000'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Channel side='left' />
        <Master />
        <Channel side='right' />
      </div>
    );
  }
}

export default App;
