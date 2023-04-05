export function convertGenreToRoute(genre: string): string {
  if (genre.includes(' ')) {
    const words = genre.split(' ').map((word) => word.toLowerCase());
    return words.join('-');
  }
  return genre.toLowerCase();
}
