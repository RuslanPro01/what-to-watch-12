import {store} from '../store';
import {AuthorizationStatus} from '../components/private-route/const';
import {Film, Films} from './films';
import {LoadStatuses} from './load-statuses';
import {Comments} from './comments';
import {User} from './user';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type ValueOf<T> = T[keyof T];
export type AuthStatuses = ValueOf<typeof AuthorizationStatus>;

export type UserProcess = {
  authorizationStatus: AuthStatuses;
  user: User | null;
}

export type ApiProcess = {
  genre: string;
  allFilms: Films;
  LoadStatus: {
    Films: LoadStatuses;
    SimilarFilms: LoadStatuses;
    Film: LoadStatuses;
    Comments: LoadStatuses;
    PostComment: LoadStatuses;
  };
  genres: string[];
  MoviePage: {
    Film: Film | null;
    SimilarFilms: Films | null;
    Comments: Comments | null;
  };
}
