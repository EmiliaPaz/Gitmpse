import React, { Component } from 'react';

import Profile from '../Profile';
import Title from '../Title';

class App extends Component {
  render() {
    return (
        <div>
            <Title/>
            <Profile/>
        </div>
    );
  }
}

export default App;