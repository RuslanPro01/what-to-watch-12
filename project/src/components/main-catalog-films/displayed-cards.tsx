import {useDisplayedCards} from '../../hooks/use-displayed-cards';
import {Films} from '../../types/films';
import FilmCards from '../film-cards/film-cards';
import {CatalogMoreButton} from './catalog-more-button';

function DisplayedCards({films}: { films: Films }): JSX.Element {
  const {displayedCount, showMoreCards} = useDisplayedCards();
  const countDisplayCards = Math.min(displayedCount, films.length);
  const buttonIsVisible = displayedCount < films.length;

  return (
    <>
      <FilmCards films={films.slice(0, countDisplayCards)}/>
      <CatalogMoreButton isButtonVisible={buttonIsVisible} handleButtonClick={showMoreCards}/>
    </>
  );
}

export default DisplayedCards;
