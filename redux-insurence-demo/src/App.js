import React, { useState } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={handleMenuOpen} className="button">
        Open menu
      </button>
      {isMenuOpen ? (
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      ) : null}
    </div>
  );
}

export default App;
