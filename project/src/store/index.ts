import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {createApi} from '../services/api';

export const api = createApi();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
