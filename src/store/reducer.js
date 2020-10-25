import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";
import {allGenresTitle} from "../const";
import {getFiltredFilms} from "../film-filter.js";

const initialState = {
  genre: allGenresTitle,
  filteredFilms: films,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      let newGenre = action.payload;

      return extend(state, {
        genre: newGenre,
      });

    case ActionType.GET_FILMS_BY_FILTER:
      if (state.genre === allGenresTitle) {
        return extend({}, initialState);
      }
      let newFilms = getFiltredFilms(state.films, action.payload);

      return extend(state, {
        filteredFilms: newFilms
      });
  }
  return state;
};

export {reducer};
