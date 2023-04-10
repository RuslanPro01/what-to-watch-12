import {useEffect, useState} from 'react';
import { INCREMENTOR_DISPLAYED_CARDS, INITIAL_DISPLAYED_CARDS } from './const';
import {useLocation} from 'react-router-dom';

export function useDisplayedCards() {
  const pathName = useLocation();
  useEffect(() => {
    setDisplayedFilms(INITIAL_DISPLAYED_CARDS);
  }, [pathName]);
  const [displayedCount, setDisplayedFilms] = useState(INITIAL_DISPLAYED_CARDS);
  const showMoreCards = () => {
    setDisplayedFilms(displayedCount + INCREMENTOR_DISPLAYED_CARDS);
  };

  return {displayedCount, showMoreCards};
}
