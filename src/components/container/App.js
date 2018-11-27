import React, { Component } from 'react';
import '../../css/App.css';

import Channel from './Channel';
import Master from './Master';

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
