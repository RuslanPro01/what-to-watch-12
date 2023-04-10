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
