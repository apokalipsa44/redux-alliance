import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>apokalipsa44</h1>
      </div>
    </Provider>
  );
}

export default App;
