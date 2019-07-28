import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import RepositoryList, { REPOSITORY_FRAGMENT } from '../Repository';
import Loading from '../Loading';
import ErrorMessage from '../Error';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
    query($cursor: String){
        viewer {
            repositories(
                first: 5
                orderBy: { direction: DESC, field: STARGAZERS }
                after: $cursor
            ) {
                edges {
                    node {
                        ...repository
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
  ${REPOSITORY_FRAGMENT}
`;

const GET_REPOSITORIES_OF_USER = gql`
    query($username: String!, $cursor: String){
        user(login: $username) {
            repositories(
                first: 5
                orderBy: { direction: DESC, field: STARGAZERS }
                after: $cursor
            ) {
                edges {
                    node {
                        ...repository
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
  ${REPOSITORY_FRAGMENT}
`;



const Profile = ({ username }) => (
    <Query 
        query={GET_REPOSITORIES_OF_CURRENT_USER}
        notifyOnNetworkStatusChange={true}
    >
   
   {/* <Query 
        query={GET_REPOSITORIES_OF_USER}
        variables={{
            username,
          }}
        notifyOnNetworkStatusChange={true}
    > */}

        {({ data, loading, error, fetchMore }) => {
            if (error) {
                return <ErrorMessage error={error} />;
            }

            const { viewer } = data;

            if (loading && !viewer) {
                return <Loading />;
            }

            return <RepositoryList repositories={viewer.repositories} fetchMore={fetchMore} />;
        }}
    </Query>
);

export default Profile;