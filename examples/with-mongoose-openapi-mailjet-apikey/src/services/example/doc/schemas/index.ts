import { TYPES } from '@services/open-api/constants';

export const Example = {
  type: 'object',
  properties: {
    message: { ...TYPES.STRING, example: 'Pong 🏓' },
  },
};
