import {genres} from '../../store/reducer';
import {Link} from 'react-router-dom';

function CatalogGenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li className="catalog__genres-item catalog__genres-item--active" key={genre}>
              <Link to="#" className="catalog__genres-link">{genre}</Link>
            </li>
          )
        )
      }
    </ul>
  );
}

export default CatalogGenresList;
