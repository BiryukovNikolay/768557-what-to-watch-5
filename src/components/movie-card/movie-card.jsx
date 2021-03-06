import React, {PureComponent} from "react";
import MovieList from "../movie-list/movie-list";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {filmPropType} from "../../prop-types/proptype-film/proptype-film.js";
import Tab from "../tab/tab";
import MovieInfoScreen from '../movie-info-screen/movie-info-screen';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.tabs[0],
    };
  }

  render() {
    const {
      film,
      similarFilms,
      tabs
    } = this.props;

    const {
      poster,
      title,
      genre,
      wallpaper,
      released,
    } = film;

    const {activeTab} = this.state;

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
                    {tabs.map((tab, i) => (
                      <Tab
                        key={`tab-${i}`}
                        tab={tab}
                        onTabClick={
                          () => {
                            this.setState({
                              activeTab: tab
                            });
                          }
                        }
                        activeTab={activeTab}
                      />
                    ))}
                  </ul>
                </nav>

                <MovieInfoScreen
                  film={film}
                  activeTab={this.state.activeTab}
                ></MovieInfoScreen>

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

MovieCard.propTypes = {
  similarFilms: PropTypes.arrayOf(filmPropType).isRequired,
  film: filmPropType.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default MovieCard;
