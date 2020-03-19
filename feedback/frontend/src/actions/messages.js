import { CREATE_MESSAGE } from './types';

export const createMessage = msg => ({
  type: CREATE_MESSAGE,
  payload: msg,
});
