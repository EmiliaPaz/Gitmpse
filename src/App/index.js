import React, { Component } from 'react';

import Profile from '../Profile';
import Title from '../Title';

import { Grid, Container, Input } from 'semantic-ui-react'

class App extends Component {
    state = {
        username: 'EmiliaPaz',
    };

    onUsernameSubmit = (e, data) => {
        this.setState({ username: data.value });
      };

    render() {
        const { username } = this.state;

        return (
            <div>
                <Grid columns={1}>
                    <Grid.Row>
                        <Container textAlign='center' > 
                            <Title/>
                        </Container>
                    </Grid.Row>
                    <Grid.Row >
                        <Container textAlign='center' > 
                            <Input
                                action={{ color: 'olive', labelPosition: 'left', icon: 'user', content: 'Username' }}
                                actionPosition='left'
                                placeholder='...'
                                defaultValue='EmiliaPaz'
                                size='small'
                                onChange= {this.onUsernameSubmit}
                            />
                        </Container>
                    </Grid.Row>
                    <Grid.Row>
                        <Profile username={username}/>
                    </Grid.Row>
                </Grid>

                {/* <Title/>
                <Container textAlign='center' > 
                    <Input
                        action={{ color: 'olive', labelPosition: 'left', icon: 'user', content: 'Username' }}
                        actionPosition='left'
                        placeholder='...'
                        defaultValue='EmiliaPaz'
                        onChange= {this.onUsernameSubmit}
                    />
                </Container>
                
                <Profile username={username}/> */}
            </div>
        );
    }
}

export default App;