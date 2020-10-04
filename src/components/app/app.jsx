import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import MyList from "../mylist/mylist";
import Move from "../move/move";
import Review from "../review/review";
import Player from "../player/player";

const App = ({film}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main film={film}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/dev-move">
          <Move />
        </Route>
        <Route exact path="/dev-review">
          <Review />
        </Route>
        <Route exact path="/dev-player">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  film: PropTypes.object.isRequired,
};

export default App;
