import './page-404-style.css';
import {Link} from 'react-router-dom';
import {Path} from '../../common-const';

function Page404(): JSX.Element {
  return (
    <div className="error-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={Path.MainPage} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
      </header>
      <section className="error-container">
        <h2 className="page-title error-container__title">Welcome to the 404 page!</h2>
        <p className="error-container__text">
          Looks like you&apos;ve wandered into the zone of uncertainty. We can&apos;t say for sure what happened to this
          page, perhaps it got lost in intergalactic space or escaped to another reality.
        </p>
        <p className="error-container__text">
          We&apos;ll try to find it, but in the meantime, we recommend checking out other sections of our streaming
          service. We guarantee there&apos;s plenty of interesting and exciting content that won&apos;t leave you
          indifferent.
        </p>
        <p className="error-container__text">
          If you still want to find this page, we suggest checking your space coordinates or trying to catch it with
          teleportation. Good luck!
        </p>
        <Link to={Path.MainPage} className="error-container__link">
          GO TO THE MAIN PAGE
        </Link>
      </section>
    </div>
  );
}

export default Page404;
