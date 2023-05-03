import {useEffect, useState} from 'react';
import {Cards} from './const';
import {useLocation} from 'react-router-dom';

export function useDisplayedCards() {
  const pathName = useLocation();
  useEffect(() => {
    setDisplayedFilms(Cards.DisplayedCards);
  }, [pathName]);
  const [displayedCount, setDisplayedFilms] = useState<number>(Cards.DisplayedCards);
  const showMoreCards = () => {
    setDisplayedFilms(displayedCount + Cards.IncrementorDisplayedCards);
  };

  return {displayedCount, showMoreCards};
}
