import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import VideoPlayer from "../video-player/video-player";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHover, onOut, movie} = this.props;
    const {title} = movie;
    return (
      <article onMouseOver={onHover} onMouseOut={onOut} className="small-movie-card catalog__movies-card">
        <VideoPlayer movie={movie}/>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link">
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onOut: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    video: PropTypes.string,
  })
};

export default MovieCard;
