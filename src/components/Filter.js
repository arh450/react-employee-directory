import React from "react";
import Users from "./Users.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faUndo } from "@fortawesome/free-solid-svg-icons";

export default function Filter(props) {
  const filterIcon = <FontAwesomeIcon icon={faFilter} />;
  const undoIcon = <FontAwesomeIcon icon={faUndo} />;

  return (
    <div className="input-group col-md-4 mt-5 mx-auto">
      <select
        className="custom-select"
        name="filter"
        onChange={props.handleFilter}
      >
        <option disabled selected>
          Select a role to filter by...
        </option>
        <option value={Users[0].role}>{Users[0].role}</option>
        <option value={Users[2].role}>{Users[2].role}</option>
        <option value={Users[4].role}>{Users[4].role}</option>
        <option value={Users[6].role}>{Users[6].role}</option>
      </select>
      <div className="input-group-append">
        <button type="button" className="btn btn-info ml-1 mr-1">
          {filterIcon}
        </button>
        <button type="button" className="btn btn-danger">
          {undoIcon}
        </button>
      </div>
    </div>
  );
}
