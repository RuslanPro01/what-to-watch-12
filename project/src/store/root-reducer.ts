import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../common-const';
import {userProcess} from './user-process/user-process';
import {apiProcess} from './api-process/api-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Api]: apiProcess.reducer
});
