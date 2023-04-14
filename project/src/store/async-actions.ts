import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/store';
import {State} from '../types/store';
import {AxiosInstance} from 'axios';
import {Films} from '../types/films';
import {ApiRoute} from './const';
import {changeLoadStatus, loadFilms} from './action';

type asyncActionsProps = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, asyncActionsProps> (
  'data/fetchQuestion',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(ApiRoute.Films);
    dispatch(loadFilms(data));
    dispatch(changeLoadStatus(false));
  }
);
