import gql from 'graphql-tag';

const REPOSITORY_FRAGMENT = gql`
    fragment repository on Repository {
        id
        name
        url
        descriptionHTML
        primaryLanguage {
            name
        }
        owner {
            login
            url
        }
        stargazers(first: 5) {
            edges{
                node {
                    name
                }
            }
            totalCount
          }
        viewerHasStarred
        watchers {
            totalCount
        }
        viewerSubscription
        forkCount
        createdAt
        updatedAt
        languages(
            first: 5
            orderBy: { direction: DESC, field: SIZE }
        ){
            edges {
                node {
                    id
                    name
                    color
                }
            }
        }
    }
`;

export default REPOSITORY_FRAGMENT;