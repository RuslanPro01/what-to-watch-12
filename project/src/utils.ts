export function convertGenreToRoute(genre: string): string {
  if (genre.includes(' ')) {
    const words = genre.split(' ').map((word) => word.toLowerCase());
    return words.join('-');
  }
  return genre.toLowerCase();
}

function toUpperFirstSymbol(word: string) {
  return word.split('').map((symbol, index) => {
    if (index === 0) {
      return symbol.toUpperCase();
    }
    return symbol;
  }).join('');
}

export function capitalizeRouteGenre(pathGenre: string): string {
  if (pathGenre.includes('-')) {
    const words = pathGenre.split('-').map((word, index) => {
      if (index === 0) {
        return toUpperFirstSymbol(word);
      }
      return word;
    });
    return words.join(' ');
  }
  return toUpperFirstSymbol(pathGenre);
}

export function convertRatingToText(rating?: number) {
  if (!rating) {
    return '';
  }
  const TextRating = {
    Bad: {
      Text: 'Bad',
      Value: 3
    },
    Normal: {
      Text: 'Normal',
      Value: 5
    },
    Good: {
      Text: 'Good',
      Value: 8
    },
    VeryGood: {
      Text: 'Very good',
      Value: 10
    },
    Awesome: {
      Text: 'Awesome',
      Value: 10
    }
  } as const;

  if (rating < TextRating.Bad.Value) {
    return TextRating.Bad.Text;
  }
  if (rating < TextRating.Normal.Value) {
    return TextRating.Normal.Text;
  }
  if (rating < TextRating.Good.Value) {
    return TextRating.Good.Text;
  }
  if (rating < TextRating.VeryGood.Value) {
    return TextRating.VeryGood.Text;
  }
  if (rating === TextRating.Awesome.Value) {
    return TextRating.Awesome.Text;
  }
}

export function createHumanizeTime(time?: number) {
  const MINUTES_IN_HOUR = 60;

  if (!time) {
    return null;
  }
  if (time <= MINUTES_IN_HOUR) {
    return `${time}m`;
  }

  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
}
