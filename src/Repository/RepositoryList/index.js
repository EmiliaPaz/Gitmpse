import React, { Fragment } from 'react';

import RepositoryItem from '../RepositoryItem';
import Loading from '../../Loading';

import { Container, Segment, Button } from 'semantic-ui-react'

import '../style.css';

const updateQuery = (previousResult, { fetchMoreResult }) => {
    if (!fetchMoreResult){
        return previousResult;
    }

    return {
        ...previousResult,
        viewer: {
            ...previousResult.viewer,
            repositories: {
                ...previousResult.viewer.repositories,
                ...fetchMoreResult.viewer.repositories,
                edges: [
                    ...previousResult.viewer.repositories.edges,
                    ...fetchMoreResult.viewer.repositories.edges,
                ]
            }
        }
    }
}

const RepositoryList = ({ repositories, loading, fetchMore }) =>

    <Fragment>
        <Container>
            <Segment.Group raised>     
                {repositories.edges.map(({ node}) => ( 
                    <Segment color='orange'>
                        <div key={node.id} className="RepositoryItem">
                            <RepositoryItem {...node} />
                        </div>
                    </Segment>
                ))}      
            </Segment.Group>


            {loading ? (
                <Loading />
            ): (
                repositories.pageInfo.hasNextPage && (
                    <Button
                        inverted color='orange'
                        type="button"
                        onClick={ () => 
                            fetchMore({ 
                                variables: { 
                                    cursor: repositories.pageInfo.endCursor,
                                },
                                updateQuery,
                            })
                        }
                    >
                        More Repositories
                    </Button>
                )
            )}
        </Container>


        
    </Fragment>

    

export default RepositoryList;