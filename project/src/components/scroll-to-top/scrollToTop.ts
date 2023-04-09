import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

export function ScrollToTop() {
  const {id} = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return null;
}
