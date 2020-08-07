import React, { Component } from "react";

import Filter from "./Filter";
import Table from "./Table/Table";
import Data from "./Data.json";

export default class Wrapper extends Component {
  state = {
    filter: "",
    data: Data,
  };

  handleFilterOption = (event) => {
    const filterItem = event.target.name;
    const value = event.target.value;

    this.setState({ [filterItem]: value });
  };

  handleFilterSubmit = (event) => {
    event.preventDefault();
    const filteredTable = Data.filter(
      (employee) => employee.role === this.state.filter
    );

    this.setState({ data: filteredTable });
  };

  handleFilterReset = (event) => {
    event.preventDefault();
    this.setState({ data: Data });
  };

  render() {
    return (
      <main>
        <Filter
          handleFilterOption={this.handleFilterOption}
          handleFilterSubmit={this.handleFilterSubmit}
          handleFilterReset={this.handleFilterReset}
        />
        <Table data={this.state.data} />
      </main>
    );
  }
}
