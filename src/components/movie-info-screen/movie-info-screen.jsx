import React from "react";
import MovieDetails from "../movie-details/movie-details";
import MoveOverview from "../movie-oveview/movie-oveview";
import MovieReviews from "../movie-reviews/movie-reviews";

const MovieInfoScreen = ({film, activeTab}) => {
  const infoScreens = {
    'Overview': <MoveOverview film={film}></MoveOverview>,
    'Details': <MovieDetails film={film}></MovieDetails>,
    'Reviews': <MovieReviews></MovieReviews>,
  };
  return infoScreens[activeTab];
};

export default MovieInfoScreen;
