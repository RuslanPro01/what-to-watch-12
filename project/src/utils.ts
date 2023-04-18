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
    BAD: 'Bad',
    NORMAL: 'Normal',
    GOOD: 'Good',
    VERY_GOOD: 'Very good',
    AWESOME: 'Awesome'
  };

  if (rating < 3) {
    return TextRating.BAD;
  }
  if (rating < 5) {
    return TextRating.NORMAL;
  }
  if (rating < 8) {
    return TextRating.GOOD;
  }
  if (rating < 10) {
    return TextRating.VERY_GOOD;
  }
  if (rating === 10) {
    return TextRating.AWESOME;
  }
}

export function createHumanizeTime(time?: number) {
  const MINUTES_IN_HOUR = 60;

  if (!time) {
    return null;
  }
  if (time <= 60) {
    return `${time}m`;
  }

  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
}
