export const getFiltredFilms = (films, genre) => {
  if (genre === `all genre`) {
    return films;
  }
  return films.filter((film) => {
    return film.genre === genre;
  });
};
