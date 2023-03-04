import Main from '../../pages/main/Main';

type AppProps = {
  filmName: string;
  yearFilm: number;
  filmGenre: string;
}

function App({filmName, yearFilm, filmGenre}: AppProps): JSX.Element {
  return <Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre}/>;
}

export default App;
