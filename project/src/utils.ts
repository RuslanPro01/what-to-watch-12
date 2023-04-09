export function convertGenreToRoute(genre: string): string {
  if (genre.includes(' ')) {
    const words = genre.split(' ').map((word) => word.toLowerCase());
    return words.join('-');
  }
  return genre.toLowerCase();
}

function toUpperFirstSubmol(word: string) {
  word = word.split('').map((symbol, index) => {
    if (index === 0) {
      return symbol.toUpperCase();
    }
    return symbol;
  }).join('');
  return word;
}

export function convertRouteGenreToGenre(pathGenre: string): string {
  if (pathGenre.includes('-')) {
    const words = pathGenre.split('-').map((word, index) => {
      if (index === 0) {
        return toUpperFirstSubmol(word);
      }
      return word;
    });
    return words.join(' ');
  }
  return toUpperFirstSubmol(pathGenre);
}
