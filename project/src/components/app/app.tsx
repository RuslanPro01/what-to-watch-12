import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import Page404 from '../../pages/page-404/page-404';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import {Path} from '../../common-const';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../private-route/const';
import MyList from '../../pages/my-list/my-list';
import {Films} from '../../mock/films';

const {MainPage, Login, FilmsPages, PlayerPage, PageNotFound, MyListPage} = Path;

type AppProps = {
  filmName: string;
  yearFilm: number;
  filmGenre: string;
  films: Films;
}

function App({filmName, yearFilm, filmGenre, films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MainPage}>
          <Route index element={<Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre} films={films}/>}/>
          <Route path={Login} element={<SignIn/>}/>
          <Route path={FilmsPages.MainPage}>
            <Route index element={<MoviePage/>}/>
            <Route path={FilmsPages.Review} element={<AddReview/>}/>
          </Route>
          <Route path={PlayerPage} element={<Player/>}/>
          <Route path={MyListPage} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films}/>
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={PageNotFound} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
