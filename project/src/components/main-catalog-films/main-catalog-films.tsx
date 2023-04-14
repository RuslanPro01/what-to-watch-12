import CatalogGenresList from './catalog-genres-list';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useLayoutEffect} from 'react';
import {capitalizeRouteGenre, convertGenreToRoute} from '../../utils';
import {changeGenre} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ALL_GENRES} from '../../common-const';
import {selectedGenres} from '../../selectors';

function MainCatalogFilms(): JSX.Element {
  const {pathGenre} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const uniqGenres = useAppSelector(selectedGenres);

  useLayoutEffect(() => {
    if (pathGenre) {
      const convertedPathGenre = capitalizeRouteGenre(pathGenre);
      if (uniqGenres.some((element) => element === convertedPathGenre)) {
        dispatch(changeGenre(convertedPathGenre));
      }
    } else {
      dispatch(changeGenre(ALL_GENRES));
    }
  }, [pathGenre, dispatch, uniqGenres]);

  useEffect(() => {
    if (!pathGenre) {
      navigate(convertGenreToRoute(ALL_GENRES));
    }
  }, [navigate, pathGenre]);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <CatalogGenresList/>
      <Outlet/>
    </section>
  );
}

export default MainCatalogFilms;
