import CatalogGenresList from './catalog-genres-list';
import {Outlet} from 'react-router-dom';

function MainCatalogFilms(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <CatalogGenresList/>
      <Outlet/>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default MainCatalogFilms;
