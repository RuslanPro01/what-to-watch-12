import {Path} from '../../common-const';
import {Link} from 'react-router-dom';

type AddReviewButtonProps = {
  isMainPage: boolean;
}

export function AddReviewButton({isMainPage}: AddReviewButtonProps) {
  return (
    !isMainPage ? <Link to={Path.FilmsPages.Review} className="btn film-card__button">Add review</Link> : null
  );
}

