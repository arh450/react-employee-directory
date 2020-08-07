import React, { Component } from "react";

import Filter from "./Filter";
import Table from "./Table/Table";
import Users from "./Users.json";

export default class Wrapper extends Component {
  state = {
    filter: "",
    data: Users,
  };

  handleFilterOption = (event) => {
    const filterItem = event.target.name;
    const value = event.target.value;

    this.setState({ [filterItem]: value });
  };

  render() {
    return (
      <main>
        <Filter handleFilterOption={this.handleFilterOption} />
        <Table data={this.state.data} />
      </main>
    );
  }
}
