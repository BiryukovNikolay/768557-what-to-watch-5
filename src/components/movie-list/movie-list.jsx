import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import {filmPropType} from "../../prop-types/proptype-film/proptype-film.js";

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
  movies: PropTypes.arrayOf(filmPropType).isRequired
};

export default MovieList;
