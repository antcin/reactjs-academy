import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhotoContainer from "./components/Photos/PhotoContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";

const store = createStore(combineReducers);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

class App extends Component {
  render() {
    return <PhotoContainer />;
  }
}

export default Root;
