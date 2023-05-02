import CatalogGenresList from './catalog-genres-list';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import {memo, useEffect, useLayoutEffect, useMemo} from 'react';
import {capitalizeRouteGenre, convertGenreToRoute} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ALL_GENRES} from '../../common-const';
import {selectedGenres} from '../../store/api-process/selectors';
import {changeGenre} from '../../store/api-process/api-process';

function MainCatalogFilms(): JSX.Element {
  const {pathGenre} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const uniqGenres = useAppSelector(selectedGenres);

  const convertedPathGenre = useMemo(() => pathGenre ? capitalizeRouteGenre(pathGenre) : null, [pathGenre]);

  const isConvertedPathGenre = useMemo(() => convertedPathGenre ? uniqGenres.some((element) => element === convertedPathGenre) : false, [convertedPathGenre, uniqGenres]);

  useLayoutEffect(() => {
    if (pathGenre && isConvertedPathGenre && (convertedPathGenre !== null)) {
      dispatch(changeGenre(convertedPathGenre));
    } else {
      dispatch(changeGenre(ALL_GENRES));
    }
  }, [pathGenre, dispatch, isConvertedPathGenre, convertedPathGenre]);

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

export default memo(MainCatalogFilms);
