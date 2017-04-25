// @flow
import { graphql } from 'react-relay';
import type { index_user } from './__generated__/index_user.graphql.js';

graphql`
  fragment index_user on User {
    username
  }
`;

const user: index_user = {
  username: 3, // Should be a flow error since username has type string
};
