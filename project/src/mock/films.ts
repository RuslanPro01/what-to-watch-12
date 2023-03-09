type Film = {
  'name': string;
  'posterImage': string;
  'previewImage': string;
  'backgroundImage': string;
  'backgroundColor': string;
  'description': string;
  'rating': number;
  'scoresCount': number;
  'director': string;
  'starring': string[];
  'runTime': number;
  'genre': string;
  'released': number;
  'id': number;
  'isFavorite': boolean;
  'videoLink': string;
  'previewVideoLink': string;
}

type Films = readonly Film[]

export const films: Films = [
  {
    'name': 'Legend',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/Legend.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/legend.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/legend.jpg',
    'backgroundColor': '#E1DAD7',
    'description': 'Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.',
    'rating': 3.5,
    'scoresCount': 138487,
    'director': 'Brian Helgeland',
    'starring': [
      'Tom Hardy',
      'Emily Browning',
      'Taron Egerton'
    ],
    'runTime': 132,
    'genre': 'Crime',
    'released': 2015,
    'id': 1,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Johnny English',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/Johnny_English.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/johnny-english.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/Johnny_English.jpg',
    'backgroundColor': '#F0DBA2',
    'description': 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
    'rating': 10,
    'scoresCount': 136843,
    'director': 'Peter Howitt',
    'starring': [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    'runTime': 88,
    'genre': 'Comedy',
    'released': 2003,
    'id': 2,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bike.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Bohemian Rhapsody',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/bohemian_rhapsody.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
    'backgroundColor': '#929FA5',
    'description': 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    'rating': 6.1,
    'scoresCount': 338903,
    'director': 'Bryan Singer',
    'starring': [
      'Rami Malek',
      'Lucy Boynton',
      'Gwilym Lee'
    ],
    'runTime': 134,
    'genre': 'Drama',
    'released': 2018,
    'id': 3,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bike.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'War of the Worlds',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/war-of-the-worlds.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/War_of_the_Worlds.jpg',
    'backgroundColor': '#9B7E61',
    'description': 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
    'rating': 9.3,
    'scoresCount': 386834,
    'director': 'Steven Spielberg',
    'starring': [
      'Tom Cruise',
      'Dakota Fanning',
      'Tim Robbins'
    ],
    'runTime': 116,
    'genre': 'Adventure',
    'released': 2005,
    'id': 4,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Bronson',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/bronson.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/bronson.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/bronson.jpg',
    'backgroundColor': '#73B39A',
    'description': 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
    'rating': 3.6,
    'scoresCount': 109661,
    'director': 'Nicolas Winding Refn',
    'starring': [
      'Tom Hardy',
      'Kelly Adams',
      'Luing Andrews'
    ],
    'runTime': 92,
    'genre': 'Action',
    'released': 2008,
    'id': 5,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Macbeth',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/Macbeth.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/macbeth.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/Macbeth.jpg',
    'backgroundColor': '#F1E9CE',
    'description': 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    'rating': 3.3,
    'scoresCount': 48798,
    'director': 'Justin Kurzel',
    'starring': [
      'Michael Fassbender',
      'Marion Cotillard',
      'Jack Madigan'
    ],
    'runTime': 113,
    'genre': 'Drama',
    'released': 2015,
    'id': 6,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bike.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Snatch',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/Snatch.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/snatch.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/Snatch.jpg',
    'backgroundColor': '#FDFDFC',
    'description': 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    'rating': 0.2,
    'scoresCount': 716577,
    'director': 'Guy Ritchie',
    'starring': [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    'runTime': 104,
    'genre': 'Comedy',
    'released': 2000,
    'id': 7,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Fantastic Beasts: The Crimes of Grindelwald',
    'posterImage': 'https://12.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
    'previewImage': 'https://12.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundImage': 'https://12.react.pages.academy/static/film/background/Fantastic_Beasts.jpg',
    'backgroundColor': '#B6A99F',
    'description': 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    'rating': 3.4,
    'scoresCount': 160757,
    'director': 'David Yates',
    'starring': [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    'runTime': 134,
    'genre': 'Fantasy',
    'released': 2018,
    'id': 8,
    'isFavorite': false,
    'videoLink': 'https://12.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://12.react.pages.academy/static/film/video/dog.mp4'
  },
];
