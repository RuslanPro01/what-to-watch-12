import CatalogGenresList from './catalog-genres-list';
import {Outlet, useParams} from 'react-router-dom';
import {useLayoutEffect} from 'react';
import {capitalizeRouteGenre} from '../../utils';
import {ALL_GENRES, genres} from '../../store/reducer';
import {changeGenre} from '../../store/action';
import {useAppDispatch} from '../../hooks';

function MainCatalogFilms(): JSX.Element {
  const {pathGenre} = useParams();
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    if (pathGenre) {
      const convertedPathGenre = capitalizeRouteGenre(pathGenre);
      if (genres.some((element) => element === convertedPathGenre)) {
        dispatch(changeGenre(convertedPathGenre));
      }
    } else {
      dispatch(changeGenre(ALL_GENRES));
    }
  }, [pathGenre, dispatch]);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <CatalogGenresList/>
      <Outlet/>
    </section>
  );
}

export default MainCatalogFilms;
