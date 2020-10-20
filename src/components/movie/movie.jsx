import React, {PureComponent} from "react";
import MovieList from "../movie-list/movie-list";
import {Link} from "react-router-dom";
import {getRatingLabel} from "./utils";
import PropTypes from "prop-types";


class Movie extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      film,
      similarFilms,
    } = this.props;

    const {
      poster,
      title,
      genre,
      wallpaper,
      released,
      rating,
      countReiewvs,
      director,
      starring,
      description,
    } = film;

    const ratingLabel = getRatingLabel(rating);

    return (
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src={wallpaper}
                alt={title}
              />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>
              <div className="user-block">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width={63}
                    height={63}
                  />
                </div>
              </div>
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                <div className="movie-card__buttons">
                  <Link to="/dev-player"
                    className="btn btn--play movie-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to="/dev-review"
                    className="btn movie-card__button"
                  >
                Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={poster}
                  alt={title}
                  width={218}
                  height={327}
                />
              </div>
              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">
                    Overview
                      </a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">
                    Details
                      </a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">
                    Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="movie-rating">
                  <div className="movie-rating__score">{rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{ratingLabel}</span>
                    <span className="movie-rating__count">{countReiewvs}</span>
                  </p>
                </div>
                <div className="movie-card__text">
                  <p>
                    {description}
                  </p>
                  <p className="movie-card__director">
                    <strong>Director: {director}</strong>
                  </p>
                  <p className="movie-card__starring">
                    <strong>
                  Starring: {starring[0]}, {starring[1]}, {starring[2]}, {starring[3]} and
                  other
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList movies={similarFilms.slice(-4)} />
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
              <p>© 2020 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  similarFilms: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        wallpaper: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        countReiewvs: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        runTime: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(
            PropTypes.string
        )
      })
  ).isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    wallpaper: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    countReiewvs: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    runTime: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    )
  })
};


export default Movie;