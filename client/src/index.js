import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import {legacy_createStore as createStore} from 'redux';
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import { createRoot } from 'react-dom/client'
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDom.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
  </Provider>,
)

