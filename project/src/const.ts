export const Path = {
  MainPage: '/',
  Login: '/login',
  Films: {
    MainPage: 'films/:id/',
    Review: 'review'
  },
  PlayerPage: 'player/:id',
  MyListPage: 'mylist',
  PageNotFound: '*'
} as const;
