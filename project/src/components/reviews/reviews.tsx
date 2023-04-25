import {Comments} from '../../types/comments';
import {ColumnReviews} from './column-reviews';

type ReviewsProps = {
  comments: Comments;
}

export function Reviews({comments}: ReviewsProps): JSX.Element {
  const divisionNumber = Math.round(comments.length / 2);
  const leftColumnReviews = comments.slice(0, divisionNumber);
  const rightColumnReviews = comments.slice(divisionNumber);
  return (
    <>
      <ColumnReviews comments={leftColumnReviews}/>
      {comments.length > 1 ? <ColumnReviews comments={rightColumnReviews}/> : null}
    </>
  );
}
