import {VideoControl} from '../pages/player/const';

type ValueOf<T> = T[keyof T];
export type Control = ValueOf<typeof VideoControl>
