export const Path = {
  MainPage: '/',
  Login: '/login',
  FilmsPages: {
    MainPage: '/AllFilms/:id',
    Review: 'review',
    Tabs: {
      Overview: 'overview',
      Details: 'details',
      Reviews: 'reviews',
    }
  },
  PlayerPage: '/player/:id',
  MyListPage: '/mylist',
  PageNotFound: '*'
} as const;

export const TIME_OUT_ACTIVE_VIDEO = 1000;
