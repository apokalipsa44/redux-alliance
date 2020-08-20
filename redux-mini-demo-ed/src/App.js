import React from "react";
import "./App.css";
import { createStore } from "redux";

//actions here
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//reducers here
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//store here
let store = createStore(counter);

//dispatch here
store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

function App() {
  return <div></div>;
}

export default App;
