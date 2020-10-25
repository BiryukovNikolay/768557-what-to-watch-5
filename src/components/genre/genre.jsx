import React from "react";
import PropTypes from "prop-types";

const Genre = ({genre, activeGenre, changeFilter, getFilmsByFilter}) => {
  const activeClass = activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  return (
    <li className={activeClass}>
      <a href="#"
        className="catalog__genres-link"
        onClick={(evt) =>{
          evt.preventDefault();
          changeFilter(genre);
          getFilmsByFilter(genre);
        }}>
        {genre}
      </a>
    </li>
  );
};

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  getFilmsByFilter: PropTypes.func.isRequired,
};

export default Genre;
