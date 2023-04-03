import CatalogGenresList from './catalog-genres-list';
import FilmCards from '../film-cards/film-cards';
import {useSelector} from 'react-redux';

function MainCatalogFilms(): JSX.Element {
  const store = useSelector((state) => state);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <CatalogGenresList/>
      <FilmCards films={store.allFilms}/>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default MainCatalogFilms;
