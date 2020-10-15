import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHover, movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => (
          <div key={`${i}-${movie.titte}`}>
            <MovieCard movie={movie}/>
          </div>
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  onHover: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(
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

export default MovieList;
