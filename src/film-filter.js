export const getFiltredFilms = (films, genre) => {
  if (genre === `All genres`) {
    return films;
  }
  return films.filter((film) => {
    return film.genre === genre;
  });
};
