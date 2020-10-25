import React from "react";
import Genre from "../genre/genre";
import PropTypes from "prop-types";
import {filmPropType} from "../../prop-types/proptype-film/proptype-film.js";

const GenreList = ({films, activeGenre}) => {
  const availableGenres = new Set();
  films.forEach((film) => {
    availableGenres.add(film.genre);
  });

  return (<ul className="catalog__genres-list">
    {availableGenres.map((genre, i) => {
      return (<Genre
        key={`genre-${i}`}
        genre={genre}
        activeGenre={activeGenre}
      ></Genre>);
    })}
  </ul>);
};

GenreList.propTypes = {
  films: PropTypes.arrayOf(filmPropType).isRequired,
  activeGenre: PropTypes.func.isRequired,
};

export default GenreList;
