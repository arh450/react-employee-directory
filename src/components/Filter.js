import React from "react";
import Data from "./Data.json";

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
        onChange={props.handleFilterOption}
      >
        <option disabled selected>
          Select a role to filter by...
        </option>
        <option value={Data[0].role}>{Data[0].role}</option>
        <option value={Data[2].role}>{Data[2].role}</option>
        <option value={Data[4].role}>{Data[4].role}</option>
        <option value={Data[6].role}>{Data[6].role}</option>
      </select>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-info ml-1 mr-1"
          onClick={props.handleFilterSubmit}
        >
          {filterIcon}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={props.handleFilterReset}
        >
          {undoIcon}
        </button>
      </div>
    </div>
  );
}
