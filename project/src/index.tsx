import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mock/films';
import {Provider} from 'react-redux';
import {store} from './store';

const PromoFilm = {
  Genre: 'Drama',
  Year: 2014,
  Name: 'The Grand Budapest Hotel'
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App filmName={PromoFilm.Name} yearFilm={PromoFilm.Year} filmGenre={PromoFilm.Genre} films={films}/>
    </Provider>
  </React.StrictMode>,
);
