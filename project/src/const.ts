export const Path = {
  MainPage: '/',
  Login: '/login',
  FilmsPages: {
    MainPage: 'films/:id/',
    Review: 'review'
  },
  PlayerPage: 'player/:id',
  MyListPage: 'mylist',
  PageNotFound: '*'
} as const;
