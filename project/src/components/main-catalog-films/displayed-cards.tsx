import {useDisplayedCards} from '../../hooks/use-displayed-cards';
import FilmCards from '../film-cards/film-cards';
import {CatalogMoreButton} from './catalog-more-button';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../spiner/spinner';
import {LoadStatus} from '../../services/const';
import {selectedLoadStatusFilms, selectFilteredFilms} from '../../store/api-process/selectors';

function DisplayedCards(): JSX.Element {
  const filteredFilms = useAppSelector(selectFilteredFilms);
  const loadStatusFilms = useAppSelector(selectedLoadStatusFilms);

  const {displayedCount, showMoreCards} = useDisplayedCards();
  const countDisplayCards = Math.min(displayedCount, filteredFilms.length);
  const buttonIsVisible = displayedCount < filteredFilms.length;

  if (loadStatusFilms === LoadStatus.Loading) {
    return <Spinner/>;
  }

  if (loadStatusFilms === LoadStatus.Fail) {
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
