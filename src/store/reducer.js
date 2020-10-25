import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";

const initialState = {
  genre: `all_genre`,
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
      if (state.genre === `all genre`) {
        return extend({}, initialState);
      }
      let newFilms = action.payload;

      return extend(state, {
        films: newFilms
      });
  }
  return state;
};

export {reducer};
