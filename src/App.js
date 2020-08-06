import React from "react";
import "./App.css";

import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
    </div>
  );
}

export default App;

// User should be able to sort table by at least one category
// and filter users by at least one property

// Components
// navbar
// Filter Object
// Table
// Properties (table headers)
// Table data (user records)
