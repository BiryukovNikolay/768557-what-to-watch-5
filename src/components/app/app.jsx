import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import MyList from "../mylist/mylist";
import Move from "../move/move";
import Review from "../review/review";
import Player from "../player/player";

const App = ({films}) => {
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
          <Move
            film={films[0]}
            similarFilms={films}
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
  films: PropTypes.arrayOf(
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

export default App;
