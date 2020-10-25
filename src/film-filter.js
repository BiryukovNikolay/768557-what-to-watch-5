export const getFiltredFilms = (films, genre) => {
  films.filter((film) => {
    return film.genre === genre;
  });
};
