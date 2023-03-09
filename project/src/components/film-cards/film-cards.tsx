import {Films} from '../../mock/films';
import SmallFilmCard from './t-small-film-card';

function FilmCards({films}: {films: Films}): JSX.Element {
  return (
    <>
      {
        films.map(({name, previewImage, id}) => <SmallFilmCard name={name} previewImage={previewImage} key={id}/>)
      }
    </>
  );
}

export default FilmCards;
