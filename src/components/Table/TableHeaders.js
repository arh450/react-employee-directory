import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown, faUndo } from "@fortawesome/free-solid-svg-icons";

import ReactTooltip from "react-tooltip";

export default function TableHeaders(props) {
  const sortAlphaDownIcon = <FontAwesomeIcon icon={faSortAlphaDown} />;
  const undoIcon = <FontAwesomeIcon icon={faUndo} />;

  return (
    <thead className="tableHeaders">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">
          Last Name
          <button
            type="button"
            data-tip
            data-for="sortTip"
            className="btn ml-1 mr-1 p-0"
            onClick={props.handleSortedNames}
          >
            {sortAlphaDownIcon}
          </button>
          <ReactTooltip id="sortTip" place="top" effect="solid">
            Sort
          </ReactTooltip>
          <button
            type="button"
            data-tip
            data-for="undoTip"
            className="btn p-0"
            onClick={props.handleSortReset}
          >
            {undoIcon}
          </button>
          <ReactTooltip id="undoTip" place="top" effect="solid">
            Undo
          </ReactTooltip>
        </th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
}
