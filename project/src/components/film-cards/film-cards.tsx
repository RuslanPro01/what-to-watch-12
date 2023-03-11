import {Films} from '../../mock/films';
import SmallFilmCard from './small-film-card';

function FilmCards({films}: {films: Films}): JSX.Element {
  return (
    <>
      {
        films.map(({name, previewImage, id}) =>
          <SmallFilmCard name={name} previewImage={previewImage} id={id} key={id}/>)
      }
    </>
  );
}

export default FilmCards;
