import React, { Component } from 'react';

import Profile from '../Profile';
import Title from '../Title';

class App extends Component {
    state = {
        username: 'EmiliaPaz',
    };

    onUsernameSubmit = value => {
        this.setState({ username: value });
      };

    render() {
        const { username } = this.state;

        return (
            <div>
                <Title/>
                <Profile username={username}/>
            </div>
        );
    }
}

export default App;