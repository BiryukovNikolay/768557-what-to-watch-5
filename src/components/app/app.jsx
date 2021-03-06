import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import MyList from "../mylist/mylist";
import MovieCard from "../movie-card/movie-card";
import Review from "../review/review";
import Player from "../player/player";
import {filmPropType} from "../../prop-types/proptype-film/proptype-film.js";

const App = ({films, tabs}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            films={films}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact path="/dev-move">
          <MovieCard
            film={films[0]}
            similarFilms={films}
            tabs={tabs}
          />
        </Route>
        <Route exact path="/dev-review">
          <Review film={films[0]} />
        </Route>
        <Route exact path="/dev-player">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(filmPropType).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
