import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import REPOSITORY_FRAGMENT from '../fragments';
import Link from '../../Link';
import Button from '../../Button';

import { Container } from 'semantic-ui-react'

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
}) => (
    
    <div>
        <div className="RepositoryItem-title">
            <h2>
                <Link href={url}>{name}</Link>
            </h2>
            
            <div>
                {!viewerHasStarred ? (
                    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
                        {(addStar, {data,loading,error}) => (
                            <Button
                                className={'RepositoryItem-title-action'}
                                onClick={addStar}
                                update={updateAddStar}
                            >
                                Star
                            </Button> 
                        )}
                    </Mutation>
                ) : (
                    <Mutation mutation={UNSTAR_REPOSITORY} variables={{id}}>
                    {(removeStar, {data,loading,error}) => (
                        <Button
                            className={'RepositoryItem-title-action'}
                            onClick={removeStar}
                            update={updateRemoveStar}
                        >
                            Unstar
                        </Button> 
                    )}
                </Mutation>
                )}
                
            </div>
            
            <div className="RepositoryItem-title-action">
                {stargazers.totalCount} Stars
            </div>
        </div>

        <div className="RepositoryItem-description">
            <div
                className="RepositoryItem-description-info"
                dangerouslySetInnerHTML={{ __html: descriptionHTML }}
            />
            <div className="RepositoryItem-description-details">
                <div>
                    {primaryLanguage && (
                    <span>Language: {primaryLanguage.name}</span>
                    )}
                </div>
                <div>
                    {owner && (
                    <span>
                        Owner: <a href={owner.url}>{owner.login}</a>
                    </span>
                    )}
                </div>
            </div>
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