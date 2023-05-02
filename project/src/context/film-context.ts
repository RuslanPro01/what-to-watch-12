import {createContext} from 'react';
import {Film} from '../types/films';

const FilmContext = createContext<Film | null>(null);

export default FilmContext;
