import {State} from '../../types/store';
import {NameSpace} from '../../common-const';
import {createSelector} from '@reduxjs/toolkit';

const selectAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
const selectUserData = (state: State) => state[NameSpace.User].user;
export const selectedAuthStatus = createSelector(
  [selectAuthStatus],
  (authStatus) => authStatus
);
export const selectedUserData = createSelector(
  [selectUserData],
  (userData) => userData
);
