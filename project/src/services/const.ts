import {StatusCodes} from 'http-status-codes';

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export const ApiRoute = {
  Films: '/films',
  Film: (id: string) => `/films/${id}`
};

export const LoadStatus = {
  Loading: 'loading',
  Loaded: 'loaded',
  Fail: 'fail'
} as const;
