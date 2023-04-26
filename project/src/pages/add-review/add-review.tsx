import Logo from '../../components/header/logo';
import UserAuthBlock from '../../components/header/user-auth-block';
import {Link, useNavigate} from 'react-router-dom';
import {Path} from '../../common-const';
import {useParams} from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import {selectedAuthStatus, selectedFilm} from '../../store/selectors';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFilmAction} from '../../store/async-actions';
import {Spinner} from '../../components/spiner/spinner';
import {AuthorizationStatus} from '../../components/private-route/const';
import UserUnAuthBlock from '../../components/header/user-unauth-block';

function AddReview(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  const film = useAppSelector(selectedFilm);
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectedAuthStatus);

  useEffect(() => {
    if (!film && id) {
      store.dispatch(fetchFilmAction(id));
    } else if (!id) {
      navigate(Path.PageNotFound);
    }
  }, [film, id, navigate]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(Path.Login);
    }
  }, [authorizationStatus, navigate]);

  const backgroundColor = film?.backgroundColor ?? '#FFFFFF';

  return (
    <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
      <Helmet>
        <title>Add review</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          {film ? <img src={film.backgroundImage} alt={film.name}/> : <Spinner/>}
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${Path.FilmsPages.MainPage.replace(':id', id as string)}`}
                  className="breadcrumbs__link"
                >
                  {film?.name ?? <Spinner/>}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={''}>Add review</Link>
              </li>
            </ul>
          </nav>
          {authorizationStatus === AuthorizationStatus.Auth ? <UserAuthBlock/> : <UserUnAuthBlock/>}
        </header>
        <div className="film-card__poster film-card__poster--small">
          {film ? <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/> : <Spinner/>}
        </div>
      </div>
      <ReviewForm color={backgroundColor}/>
    </section>
  );
}

export default AddReview;
