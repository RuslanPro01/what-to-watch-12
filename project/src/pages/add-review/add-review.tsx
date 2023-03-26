import Logo from '../../components/header/logo';
import UserBlock from '../../components/header/user-block';
import {Link} from 'react-router-dom';
import {Path} from '../../common-const';
import {useParams} from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import {Helmet} from 'react-helmet-async';

function AddReview(): JSX.Element {
  const {id} = useParams<{ id: string }>();
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>Add review</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/${Path.FilmsPages.MainPage.replace(':id', id as string)}`}
                  className="breadcrumbs__link"
                >
                  The Grand Budapest Hotel
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={''}>Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
            height="327"
          />
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}

export default AddReview;
