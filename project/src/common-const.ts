export const Path = {
  MainPage: '/',
  Login: '/login',
  FilmsPages: {
    MainPage: '/films/:id',
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
