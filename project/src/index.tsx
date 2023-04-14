import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFilmsAction} from './store/async-actions';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const PromoFilm = {
  Genre: 'Drama',
  Year: 2014,
  Name: 'The Grand Budapest Hotel'
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App filmName={PromoFilm.Name} yearFilm={PromoFilm.Year} filmGenre={PromoFilm.Genre}/>
    </Provider>
  </React.StrictMode>,
);
