import {useDisplayedCards} from '../../hooks/use-displayed-cards';
import FilmCards from '../film-cards/film-cards';
import {CatalogMoreButton} from './catalog-more-button';
import {useAppSelector} from '../../hooks';
import {selectedLoadStatus, selectFilteredFilms} from '../../selectors';
import {Spinner} from '../spiner/spinner';
import {LoadStatus} from '../../store/const';

function DisplayedCards(): JSX.Element {
  const filteredFilms = useAppSelector(selectFilteredFilms);
  const loadStatus = useAppSelector(selectedLoadStatus);

  const {displayedCount, showMoreCards} = useDisplayedCards();
  const countDisplayCards = Math.min(displayedCount, filteredFilms.length);
  const buttonIsVisible = displayedCount < filteredFilms.length;

  if (loadStatus === LoadStatus.Loading) {
    return <Spinner/>;
  }

  if (loadStatus === LoadStatus.Fail) {
    return (
      <div>Error :( Please, reload this page</div>
    );
  }

  return (
    <>
      <FilmCards films={filteredFilms.slice(0, countDisplayCards)}/>
      <CatalogMoreButton isButtonVisible={buttonIsVisible} handleButtonClick={showMoreCards}/>
    </>
  );
}

export default DisplayedCards;
