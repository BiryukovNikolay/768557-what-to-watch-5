import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: ``
    };
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, i) => (
          <MovieCard key={`${i}-${movie.released}`}
            movie={movie}
            onOut={() => {
              this.setState({
                activeMovie: ``
              });
            }}
            onHover={() => {
              this.setState({
                activeMovie: movies[i]
              });
            }}/>
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
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
