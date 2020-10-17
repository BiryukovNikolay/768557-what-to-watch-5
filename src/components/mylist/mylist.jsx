import React from "react";
import MovieList from "../movie-list/movie-list";
import PropTypes from "prop-types";

const MyList = ({films}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title">My list</h1>
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </div>
        </div>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList movies={films}/>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        video: PropTypes.string,
        poster: PropTypes.string,
        wallpaper: PropTypes.string,
        rating: PropTypes.number,
        countReiewvs: PropTypes.number,
        description: PropTypes.string,
        genre: PropTypes.string,
        released: PropTypes.number,
        runTime: PropTypes.string,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(
            PropTypes.string
        )
      })
  ).isRequired
};

export default MyList;
