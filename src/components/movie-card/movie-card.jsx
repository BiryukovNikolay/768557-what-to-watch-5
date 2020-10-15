import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHover, movie} = this.props;
    const {
      title,
      poster,
      video,
    } = movie;
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img
            src={poster}
            alt={title}
            width={280}
            height={175}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={video}>
            {title}
          </a>
        </h3>
      </article>
    );
  }
}


MovieCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    video: PropTypes.string,
  })
};

export default MovieCard;
