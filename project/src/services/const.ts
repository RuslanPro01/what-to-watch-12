import {StatusCodes} from 'http-status-codes';

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true
};

export const ApiRoute = {
  Films: '/films',
  Film: (id: string) => `/films/${id}`,
  SimilarFilms: (id: string) => `/films/${id}/similar`,
  Comments: (id: string) => `/comments/${id}`,
  Login: '/login',
  LogOut: '/logout'
};

export const LoadStatus = {
  Loading: 'loading',
  Loaded: 'loaded',
  Fail: 'fail',
  Unknown: 'unknown'
} as const;
