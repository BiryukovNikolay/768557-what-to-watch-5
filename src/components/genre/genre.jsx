import React from "react";
import PropTypes from "prop-types";

const Genre = ({genre, onTabClick, activeGenre}) => {
  const activeClass = activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  return (
    <li className={activeClass}>
      <a href="#"
        className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
};

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired
};

export default Genre;
