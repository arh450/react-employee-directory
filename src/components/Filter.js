import React from "react";
import Data from "./Data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faUndo } from "@fortawesome/free-solid-svg-icons";

import ReactTooltip from "react-tooltip";

export default function Filter(props) {
  const filterIcon = <FontAwesomeIcon icon={faFilter} />;
  const undoIcon = <FontAwesomeIcon icon={faUndo} />;

  // Map Data array to return roles of employees
  const roles = Data.map((employee) => {
    return employee.role;
  });

  // using Set constructor (creates a collection object that may occur only once) and spread operator to return an array containing each distinctive role
  // How to remove duplicates from JS array https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  const distinctRoles = [...new Set(roles)];
  console.log(distinctRoles);

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
        {distinctRoles.map((role) => (
          <option value={role} key={role}>
            {role}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <button
          type="button"
          data-tip
          data-for="filterTip"
          className="btn btn-info ml-1 mr-1"
          onClick={props.handleFilterSubmit}
        >
          {filterIcon}
        </button>
        <ReactTooltip id="filterTip" place="top" effect="solid">
          Filter
        </ReactTooltip>
        <button
          type="button"
          data-tip
          data-for="resetTip"
          className="btn btn-danger"
          onClick={props.handleFilterReset}
        >
          {undoIcon}
        </button>
        <ReactTooltip id="resetTip" place="top" effect="solid">
          Reset
        </ReactTooltip>
      </div>
    </div>
  );
}
