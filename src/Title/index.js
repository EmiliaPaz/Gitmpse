import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import './style.css'

const Title = () => (
    <div>
        <Container>
            <Header as='h1' color='olive'> 
                Gitmpse 
                <Header.Subheader className="subheader">A GitHub glimpse</Header.Subheader>
            </Header>
           
        </Container>
        
    </div>
)

export default Title;