import React from 'react'
import { Container, Header, Input, Button } from 'semantic-ui-react'
import './style.css'

const Title = () => (
    <div>
        <Container>
            <Header as='h1' color='olive'> 
                Gitmpse 
                <Header.Subheader> A GitHub repositories glimpse</Header.Subheader>
            </Header>
           
        </Container>
        
    </div>
)

export default Title;