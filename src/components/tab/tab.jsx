import React from "react";
import PropTypes from "prop-types";

const Tab = ({tab, onTabClick, activeTab}) => {
  const activeClass = activeTab === tab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`;
  return (
    <li className={activeClass}>
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
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default Tab;
