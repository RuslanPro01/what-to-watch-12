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
import Overview from '../../pages/movie-page/overview';
import Details from '../../pages/movie-page/details';
import Review from '../../pages/movie-page/review';

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
        <Route path={MainPage} element={<Main filmName={filmName} yearFilm={yearFilm} filmGenre={filmGenre} films={films}/>}/>
        <Route path={Login} element={<SignIn/>}/>
        <Route path={FilmsPages.MainPage} element={<MoviePage/>}>
          <Route path={FilmsPages.Tabs.Overview} element={<Overview />} />
          <Route path={FilmsPages.Tabs.Details} element={<Details />} />
          <Route path={FilmsPages.Tabs.Reviews} element={<Review />} />
        </Route>
        <Route path={`${FilmsPages.MainPage}/${FilmsPages.Review}`} element={<AddReview/>}/>
        <Route path={PlayerPage} element={<Player/>}/>
        <Route path={MyListPage} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={PageNotFound} element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
