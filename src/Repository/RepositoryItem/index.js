import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import REPOSITORY_FRAGMENT from '../fragments';
import Link from '../../Link';

import { Button, Container, Divider, Header, Grid, List } from 'semantic-ui-react'

import '../style.css';

const RepositoryItem = ({
    id,
    name,
    url,
    descriptionHTML,
    primaryLanguage,
    owner,
    stargazers,
    watchers,
    viewerSubscription,
    viewerHasStarred,
    forkCount,
    createdAt,
    updatedAt,
    languages,
}) => (
    
    <div>
        <div className="RepositoryItem-title">
            <Header as='h2' textAlign='center'>
                <Link href={url}>{name}</Link> 
                {!viewerHasStarred ? (
                    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
                        {(addStar, {data,loading,error}) => (
                            <Button 
                                className={'RepositoryItem-button'}
                                onClick={addStar}
                                update={updateAddStar}
                                circular
                                size='mini'
                                color='yellow'
                            >
                                Star
                            </Button> 
                        )}
                    </Mutation>
                ) : (
                    <Mutation mutation={UNSTAR_REPOSITORY} variables={{id}}>
                    {(removeStar, {data,loading,error}) => (
                        <Button
                            className={'RepositoryItem-button'}
                            onClick={removeStar}
                            update={updateRemoveStar}
                            circular
                            size='mini'
                            color='red'
                        >
                            Unstar
                        </Button> 
                    )}
                </Mutation>
                )}
            </Header>

            
            <Container className="RepositoryItem-information">
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <h3>Details</h3> 
                        <List as='ol'>
                            <List.Item as='li' value='-'>
                                <h4>Owner: </h4>  <a href={owner.url}>{owner.login}</a>
                            </List.Item>
                            <List.Item as='li' value='-'>
                                <h4> Date created: </h4> {createdAt}
                            </List.Item>
                            <List.Item as='li' value='-'>
                                <h4> Date last update: </h4> {updatedAt}
                            </List.Item>
                            <List.Item as='li' value='-'>
                                <h4> Languages: </h4>
                                <List.Item as='ol'>
                                    {languages.edges.map(({node}) => ( 
                                        <List.Item as='li' value='+'>
                                            {node.name} 
                                        </List.Item>
                                    ))}   
                                </List.Item> 
                            </List.Item>
                        </List>
                        
                    </Grid.Column>

                    <Grid.Column>
                        <h3>Stats</h3> 
                        <List as='ol'>
                            <List.Item as='li' value='-'>
                                <h4> Fork count: </h4> {forkCount}
                            </List.Item>
                            <List.Item as='li' value='-'>
                                <h4> Stars count: </h4> {stargazers.totalCount} 
                                { (stargazers.totalCount >0) ? (
                                        
                                        <List.Item as='ol'>
                                            {stargazers.edges.map(({node}) => ( 
                                                <List.Item as='li' value='+'>
                                                    {node.name}
                                                </List.Item>
                                            ))}  
                                        </List.Item>  
                                    ) : (
                                       <p></p>
                                    )}
                            </List.Item>
                  
                                    


                               
    
                           
                        </List>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Container>
       
           
        </div>

    </div>
);

const STAR_REPOSITORY = gql`
    mutation($id: ID!) {
        addStar(input: {starrableId: $id}) {
            starrable {
                id
                viewerHasStarred
            }
        }
    }
`;

const UNSTAR_REPOSITORY = gql`
    mutation($id: ID!) {
        removeStar(input: {starrableId: $id}) {
            starrable {
                id
                viewerHasStarred
            }
        }
    }
`;

const updateAddStar = (client, {data: {addStar: {starrable: {id}}}}) => {
    const repository = client.readFragment({
        id: `Repository:${id}`,
        fragment: REPOSITORY_FRAGMENT,
    });

    const totalCount = repository.stargazers.totalCount + 1;
    
    client.writeFragment({
        id: `Repository: ${id}`,
        fragment: REPOSITORY_FRAGMENT,
        data: {
            ...repository,
            stargazers: {
                ...repository.stargazers,
                totalCount,
            }
        }
    })
}

const updateRemoveStar = (client, {data: {removeStar: {starrable: {id}}}}) => {
    const repository = client.readFragment({
        id: `Repository:${id}`,
        fragment: REPOSITORY_FRAGMENT,
    });

    const totalCount = repository.stargazers.totalCount - 1;
    
    client.writeFragment({
        id: `Repository: ${id}`,
        fragment: REPOSITORY_FRAGMENT,
        data: {
            ...repository,
            stargazers: {
                ...repository.stargazers,
                totalCount,
            }
        }
    })
}

export default RepositoryItem;