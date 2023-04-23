import {Comments} from '../../types/comments';
import {Review} from './review';

type ColumnReviewsProps = {
  comments: Comments;
}

export function ColumnReviews({comments}: ColumnReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {
        comments.map((comment) => <Review comment={comment} key={comment.id}/>)
      }
    </div>
  );
}
