import {Path} from '../../common-const';
import {Link} from 'react-router-dom';

export function AddReviewButton(): JSX.Element {
  return (
    <Link to={Path.FilmsPages.Review} className="btn film-card__button">Add review</Link>
  );
}
