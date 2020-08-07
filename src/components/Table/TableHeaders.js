import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown, faUndo } from "@fortawesome/free-solid-svg-icons";

export default function TableHeaders(props) {
  const sortAlphaDownIcon = <FontAwesomeIcon icon={faSortAlphaDown} />;
  const undoIcon = <FontAwesomeIcon icon={faUndo} />;

  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">
          Last Name
          <button
            type="button"
            className="btn ml-1 mr-1 p-0"
            onClick={props.handleSortedNames}
          >
            {sortAlphaDownIcon}
          </button>
          <button
            type="button"
            className="btn p-0"
            onClick={props.handleSortReset}
          >
            {undoIcon}
          </button>
        </th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
}
