import {Comment} from '../../types/comments';
import {TimeTag} from './time-tag';

type ReviewProps = {
  comment: Comment;
}

export function Review({comment}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment.comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <TimeTag time={comment.date}/>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}
