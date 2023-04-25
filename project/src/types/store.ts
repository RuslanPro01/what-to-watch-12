import {store} from '../store';
import {AuthorizationStatus} from '../components/private-route/const';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type ValueOf<T> = T[keyof T];
export type AuthStatuses = ValueOf<typeof AuthorizationStatus>;
