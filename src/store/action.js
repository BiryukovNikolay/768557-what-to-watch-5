export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_FILTER: `GET_FILMS_BY_FILTER`,
};

export const ActionCreator = {
  changeFilter: (filterName) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filterName,
  }),
  getFilmsByFilter: (filterName) => ({
    type: ActionType.GET_FILMS_BY_FILTER,
    payload: filterName,
  })
};
