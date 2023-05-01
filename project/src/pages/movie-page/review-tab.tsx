import {Path} from '../../common-const';
import {Helmet} from 'react-helmet-async';
import {useContext, useEffect} from 'react';
import FilmContext from '../../context/film-context';
import {useParams} from 'react-router-dom';
import {fetchCommentsAction} from '../../store/async-actions';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import {LoadStatus} from '../../services/const';
import {Spinner} from '../../components/spiner/spinner';
import {Reviews} from '../../components/reviews/reviews';
import {selectedComments, selectedLoadStatusComments} from '../../store/api-process/selectors';

function ReviewTab(): JSX.Element {
  const film = useContext(FilmContext);
  const {id} = useParams();
  const loadStatusComments = useAppSelector(selectedLoadStatusComments);
  const comments = useAppSelector(selectedComments);

  useEffect(() => {
    if (id) {
      store.dispatch(fetchCommentsAction(id));
    }
  }, [id]);

  if (loadStatusComments === LoadStatus.Loading) {
    return (
      <div className="film-card__reviews film-card__row">
        <Spinner/>
      </div>
    );
  }

  if (loadStatusComments === LoadStatus.Fail || (loadStatusComments === LoadStatus.Loaded && !comments)) {
    return (
      <div className="film-card__reviews film-card__row">
        <div>Error :( Please, reload this page</div>
      </div>
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <Helmet>
        <title>{film?.name} {film?.genre} — {Path.FilmsPages.Tabs.Reviews}</title>
      </Helmet>
      {comments ? <Reviews comments={comments}/> : null}
      {comments?.length === 0 ? <div>No comments yet</div> : null}
    </div>
  );
}

export default ReviewTab;
