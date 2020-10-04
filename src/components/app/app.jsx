import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = ({film}) => {
  return (
    <Main film={film}/>
  );
};

App.propTypes = {
  film: PropTypes.object.isRequired,
};

export default App;
