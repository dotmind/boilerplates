import config from '@core/config';
import {
  EXAMPLE_TAG,
  // GENERATED_TAG
  // END_GENERATED
} from '@services/open-api/constants';
import exampleEndpoints from '@services/example/doc/endpoints';
import { Example } from '@services/example/doc/schemas';
// GENERATED_IMPORT
// END_GENERATED

const getServers = () => {
  // @TODO : Put here preprod - production env
  const sources = [
    {
      url: 'https://preprod',
      description: 'Preproduction',
    },
    {
      url: 'https://production',
      description: 'Production',
    },
  ];

  if (config.isDev) {
    return [{
      url: `http://localhost:${config.port}/api/v1`,
      description: 'Local',
    }, ...sources];
  }

  return sources;
};

const openAPI = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Open Api',
    description: 'Open Api',
    // @TODO : Change email
    contact: { email: 'open@documentation.api' },
  },
  servers: getServers(),
  tags: [
    { name: EXAMPLE_TAG },
    // ADD_TAG_GENERATED
    // END_GENERATED
  ],
  components: {
    securitySchemes: {
      // @TODO : Put here security auth
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      },
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      // @TODO : Add schema to documentation
      Example,
      // GENERATED_SCHEMA
      // END_GENERATED
    },
  },
  paths: {
    ...exampleEndpoints,
    // GENERATED_ENDPOINT
    // END_GENERATED
  },
};

export default openAPI;
