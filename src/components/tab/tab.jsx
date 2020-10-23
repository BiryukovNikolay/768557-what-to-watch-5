import React from "react";
import PropTypes from "prop-types";

const Tab = ({tab, onTabClick}) => {
  return (
    <li className="movie-nav__item">
      <a href="#"
        className="movie-nav__link"
        onClick={(evt) => {
          evt.preventDefault();
          onTabClick();
        }}
      >
        {tab}
      </a>
    </li>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default Tab;
