import {Films} from '../../mock/films';
import SmallFilmCard from './small-film-card';

type PropsFilmCard = {
  films: Films;
  onlyFavorite: boolean;
}

function FilmCards({films, onlyFavorite}: PropsFilmCard): JSX.Element {
  if (onlyFavorite) {
    return (
      <>
        {
          films.map(({name, previewImage, id, isFavorite}) => isFavorite ? <SmallFilmCard name={name} previewImage={previewImage} id={id} key={id}/> : null)
        }
      </>
    );
  }
  return (
    <>
      {
        films.map(({name, previewImage, id}) => <SmallFilmCard name={name} previewImage={previewImage} id={id} key={id}/>)
      }
    </>
  );
}

export default FilmCards;
