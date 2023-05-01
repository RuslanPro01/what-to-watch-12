import {Link, Navigate, useLocation, useParams} from 'react-router-dom';
import {Path} from '../../common-const';

function NavTab(): JSX.Element {
  const {id} = useParams<{id: string}>();
  const location = useLocation();
  if (!id) {
    return <Navigate to={Path.PageNotFound}/>;

  }
  const isDetailsActive = location.pathname.endsWith(Path.FilmsPages.Tabs.Details);
  const isReviewsActive = location.pathname.endsWith(Path.FilmsPages.Tabs.Reviews);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${!isDetailsActive && !isReviewsActive ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${id}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={`film-nav__item ${isDetailsActive ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${id}/${Path.FilmsPages.Tabs.Details}`} className="film-nav__link">Details</Link>
        </li>
        <li className={`film-nav__item ${isReviewsActive ? 'film-nav__item--active' : ''}`}>
          <Link to={`/films/${id}/${Path.FilmsPages.Tabs.Reviews}`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
