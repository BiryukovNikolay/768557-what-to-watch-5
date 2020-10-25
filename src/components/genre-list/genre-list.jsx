import React from "react";
import Genre from "../genre/genre";
import PropTypes from "prop-types";
import {filmPropType} from "../../prop-types/proptype-film/proptype-film.js";
import {allGenresTitle} from "../../const";

const GenreList = ({films, activeGenre, changeFilter, getFilmsByFilter}) => {
  const availableGenres = new Set([allGenresTitle]);
  films.forEach((film) => {
    availableGenres.add(film.genre);
  });
  console.log();
  return (<ul className="catalog__genres-list">
    {[...availableGenres].map((genre, i) => {
      return (<Genre
        key={`genre-${i}`}
        genre={genre}
        activeGenre={activeGenre}
        changeFilter={changeFilter}
        getFilmsByFilter={getFilmsByFilter}
      ></Genre>);
    })}
  </ul>);
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(filmPropType).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  getFilmsByFilter: PropTypes.func.isRequired,
};

export default GenreList;
