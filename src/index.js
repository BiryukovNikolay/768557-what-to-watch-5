import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const films = {
  grandHotelBudapest: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    dateRelize: `2014`,
    imageSRC: `img/the-grand-budapest-hotel-poster.jpg`,
  },
};

ReactDOM.render(
    <App
      film={films.grandHotelBudapest}
    />,
    document.querySelector(`#root`)
);
