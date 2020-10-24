import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films.js";
import tabs from "./mocks/tabs.js";

ReactDOM.render(
    <App
      films={films}
      tabs={tabs}
    />,
    document.querySelector(`#root`)
);
