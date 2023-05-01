import {State} from '../../types/store';
import {NameSpace} from '../../common-const';
import {createSelector} from '@reduxjs/toolkit';

const selectAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const selectedAuthStatus = createSelector(
  [selectAuthStatus],
  (authStatus) => authStatus
);

