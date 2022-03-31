import {
  API_KEY,
  json,
  apiResponseFromRef,
  apiResponseArray,
} from '@services/open-api/helpers';
import { EXAMPLE_TAG } from '@services/open-api/constants';

const ping = {
  tags: [EXAMPLE_TAG],
  description: 'Ping request',
  operationId: 'ping',
  security: [API_KEY],
  responses: { 200: apiResponseArray({ $ref: '#/components/schemas/Example' }) },
};

export default {
  '/ping': {
    get: ping,
  },
};
