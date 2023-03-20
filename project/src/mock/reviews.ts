type Comment = {
  'id': number;
  'user': {
    'id': number;
    'name': string;
  };
  'rating': number;
  'comment': string;
  'date': string;
}

export type Comments = Comment[];


export const comments: Comments = [
  {
    'id': 1,
    'user': {'id': 15, 'name': 'Kendall'},
    'rating': 5.5,
    'comment': 'This film was absolutely amazing - the acting, the cinematography, the discography, etc. were all top-notch!',
    'date': '2023-01-29T10:33:21.332Z'
  },
  {
    'id': 2,
    'user': {'id': 16, 'name': 'Jordan'},
    'rating': 8.2,
    'comment': 'One of the best movies I\'ve ever seen - the attention to detail in every aspect of the film was impressive!',
    'date': '2023-02-02T15:20:12.449Z'
  },
  {
    'id': 3,
    'user': {'id': 17, 'name': 'Avery'},
    'rating': 6.9,
    'comment': 'This film had its ups and downs - some parts were great, while others fell flat. Overall, it was still a solid movie.',
    'date': '2023-02-06T09:45:18.553Z'
  },
  {
    'id': 4,
    'user': {'id': 18, 'name': 'Cameron'},
    'rating': 9.1,
    'comment': 'I was blown away by this film - every element was expertly crafted and came together to create a truly unforgettable experience.',
    'date': '2023-02-08T16:12:05.723Z'
  },
  {
    'id': 5,
    'user': {'id': 19, 'name': 'Taylor'},
    'rating': 7.5,
    'comment': 'There were some parts of this movie that I didn\'t enjoy, but overall it was a well-made film with strong performances from the cast.',
    'date': '2023-02-10T11:01:30.865Z'
  },
  {
    'id': 6,
    'user': {
      'id': 22,
      'name': 'Jessica'
    },
    'rating': 8.2,
    'comment': 'One of the best films I have seen in years. The acting is superb, the story is engaging, and the cinematography is stunning.',
    'date': '2023-02-11T13:45:00.000Z'
  },
  {
    'id': 7,
    'user': {
      'id': 31,
      'name': 'Michael'
    },
    'rating': 7.5,
    'comment': 'I was pleasantly surprised by this movie. It is a must-watch for anyone who loves a good drama.',
    'date': '2023-02-10T18:12:00.000Z'
  },
  {
    'id': 8,
    'user': {
      'id': 18,
      'name': 'Ethan'
    },
    'rating': 6.9,
    'comment': 'This movie has a great cast and some really funny moments, but overall it was just okay.',
    'date': '2023-02-09T21:00:00.000Z'
  },
  {
    'id': 9,
    'user': {
      'id': 12,
      'name': 'Rachel'
    },
    'rating': 9.1,
    'comment': 'Absolutely loved this film. The story is unique, the characters are well-developed, and the soundtrack is amazing.',
    'date': '2023-02-08T14:30:00.000Z'
  },
  {
    'id': 10,
    'user': {
      'id': 25,
      'name': 'David'
    },
    'rating': 8.0,
    'comment': 'This movie kept me on the edge of my seat the entire time. The suspense is incredible!',
    'date': '2023-02-07T09:20:00.000Z'
  }
];

