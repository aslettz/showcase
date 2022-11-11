import { gql } from '@apollo/client';

const GetAppConfig = gql`
  query GetAppConfig {
    appConfig @client {
      useNftColor
    }
  }
`;

export default GetAppConfig;