import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Films = {
  GRAND_HOTEL_BUDAPEST: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    dateRelize: `2014`,
  },
};

ReactDOM.render(
    <App
      film={Films.GRAND_HOTEL_BUDAPEST}
    />,
    document.querySelector(`#root`)
);
