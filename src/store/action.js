import {getFiltredFilms} from "../film-filter.js";

export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_FILTER: `GET_FILMS_BY_FILTER`,
};

export const ActionCreator = {
  changeFilter: (filterName) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filterName,
  }),
  getFilmsByFilter: (films, filterName) => ({
    type: ActionType.GET_FILMS_BY_FILTER,
    payload: getFiltredFilms(films, filterName),
  }),
};
