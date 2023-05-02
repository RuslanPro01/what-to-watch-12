import {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import {BASE_RATING_VALUE, MAX_LENGTH_REVIEW, MIN_LENGTH_REVIEW, ratings, TIME_OUT_SHOW_ERROR} from './const';
import {toast} from 'react-toastify';
import {useAppSelector} from '../../hooks';
import {LoadStatus} from '../../services/const';
import {userComment} from '../../types/user-cooment';
import {useNavigate, useParams} from 'react-router-dom';
import {store} from '../../store';
import {postUserCommentAction} from '../../store/async-actions';
import {Path} from '../../common-const';
import {selectedPostStatusComment} from '../../store/api-process/selectors';

type ReviewFormProps = {
  color: string;
}

function ReviewForm({color}: ReviewFormProps): JSX.Element {
  const {id} = useParams();

  const baseReviewState: userComment = {
    filmId: id ?? '',
    comment: '',
    rating: BASE_RATING_VALUE
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(baseReviewState);
  const [isReviewTextValid, setIsReviewTextValid] = useState<boolean>(false);
  const [isRatingValid, setIsRatingValid] = useState<boolean>(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const timeOut = useRef<NodeJS.Timeout>();
  const postCommentStatus = useAppSelector(selectedPostStatusComment);

  useEffect(() => {
    if (isReviewTextValid && isRatingValid) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [isReviewTextValid, isRatingValid]);

  useEffect(() => {
    if (postCommentStatus === LoadStatus.Loaded) {
      setFormData({
        filmId: id ?? '',
        comment: '',
        rating: BASE_RATING_VALUE
      });

      navigate(`${Path.FilmsPages.MainPage.replace(':id', id as string)}/${Path.FilmsPages.Tabs.Reviews}`);
    }
  }, [navigate, id, postCommentStatus]);

  function showErrorMassage(error: string) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      toast.warn(error);
    }, TIME_OUT_SHOW_ERROR);
  }

  const handleRatingsChange = (evt: MouseEvent<HTMLInputElement>) => {
    const {className, value} = evt.target as HTMLInputElement;

    setIsRatingValid(true);

    if (className === 'rating__input') {
      setFormData({
        ...formData,
        rating: +value
      });
    }
  };

  const handeReviewTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target as HTMLTextAreaElement;
    const valueLength = value.length;

    if (valueLength < MIN_LENGTH_REVIEW) {
      showErrorMassage(`Minimum number of characters is ${MIN_LENGTH_REVIEW}, currently entered is ${valueLength}.`);
      setIsReviewTextValid(false);
    } else if (valueLength > MAX_LENGTH_REVIEW) {
      showErrorMassage(`Maximum number of characters is ${MAX_LENGTH_REVIEW}, currently entered is ${valueLength}.`);
      setIsReviewTextValid(false);
    } else {
      setIsReviewTextValid(true);
    }

    setFormData({
      ...formData,
      comment: value
    });
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    store.dispatch(postUserCommentAction(formData));
  };

  return (
    <div className="add-review">
      <form
        action="project/src/components#"
        className="add-review__form"
        onSubmit={handleFormSubmit}
      >
        <div className="rating">
          <div
            className="rating__stars"
            onClick={handleRatingsChange}
          >
            {
              ratings.map((rating) =>
                (
                  <>
                    <input className="rating__input"
                      id={`star-${rating}`}
                      type="radio"
                      name="rating"
                      value={rating}
                      disabled={postCommentStatus === LoadStatus.Loading}
                      key={rating}
                    />
                    <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                  </>
                ))
            }
          </div>
        </div>
        <div className="add-review__text" style={{backgroundColor: color}}>
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={formData.comment}
            onChange={handeReviewTextChange}
            disabled={postCommentStatus === LoadStatus.Loading}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={postCommentStatus === LoadStatus.Loading || !isButtonEnabled}>{postCommentStatus === LoadStatus.Loading ? 'Posting' : 'Post'}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
