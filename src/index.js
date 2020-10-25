import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/app/app";
import films from "./mocks/films.js";
import tabs from "./mocks/tabs.js";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        tabs={tabs}
      />
    </Provider>,
    document.querySelector(`#root`)
);
