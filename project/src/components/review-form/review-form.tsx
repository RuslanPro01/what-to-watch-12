import {useState, MouseEvent, ChangeEvent} from 'react';
import {ratings, baseRatingValue} from './const';

function ReviewForm(): JSX.Element {
  type TypeReviewData = {
    checkedValue: number;
    reviewText: string;
  }
  const baseReviewState: TypeReviewData = {
    checkedValue: baseRatingValue,
    reviewText: ''
  };

  const [formData, setFormData] = useState(baseReviewState);

  const handleRatingsChange = (evt: MouseEvent<HTMLInputElement>) => {
    const {className, value} = evt.target as HTMLInputElement;
    if (className === 'rating__input') {
      setFormData({
        ...formData,
        checkedValue: +value
      });
    }
  };

  const handeReviewTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target as HTMLTextAreaElement;
    setFormData({
      ...formData,
      reviewText: value
    });
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormData({
      checkedValue: baseRatingValue,
      reviewText: ''
    });
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
                    <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} checked={formData.checkedValue === rating}/>
                    <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                  </>
                ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={formData.reviewText}
            onChange={handeReviewTextChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
