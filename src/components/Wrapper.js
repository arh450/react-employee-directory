import React, { Component } from "react";

import Filter from "./Filter";
import Table from "./Table/Table";
import Users from "./Users.json";

export default class Wrapper extends Component {
  state = {
    filter: "",
    results: Users,
  };

  handleFilter = (event) => {
    const filterOption = event.target.name;
    const value = event.target.value;

    this.setState({ [filterOption]: value });
  };

  render() {
    return (
      <main>
        <Filter handleFilter={this.handleFilter} />
        <Table />
      </main>
    );
  }
}
