import React, {Fragment} from "react";
import {getRatingLabel} from "./utils";
import {filmPropType} from "../../prop-types/proptype-film/proptype-film.js";

const MoveOverview = ({film}) => {

  const {rating, countReiewvs, description, director, starring} = film;
  const ratingLabel = getRatingLabel(rating);

  return (<Fragment>
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
  </Fragment>);
};


MoveOverview.propTypes = {
  film: filmPropType.isRequired,
};

export default MoveOverview;
