import {Comments} from '../../types/comments';
import {ColumnReviews} from './column-reviews';

type ReviewsProps = {
  comments: Comments;
}

const MIN_REVIEWS_TO_DISPLAY = 1;
const NUMBER_OF_COLUMNS = 2;


export function Reviews({comments}: ReviewsProps): JSX.Element {
  const divisionNumber = Math.round(comments.length / NUMBER_OF_COLUMNS);
  const leftColumnReviews = comments.slice(0, divisionNumber);
  const rightColumnReviews = comments.slice(divisionNumber);
  return (
    <>
      <ColumnReviews comments={leftColumnReviews}/>
      {comments.length > MIN_REVIEWS_TO_DISPLAY ? <ColumnReviews comments={rightColumnReviews}/> : null}
    </>
  );
}
