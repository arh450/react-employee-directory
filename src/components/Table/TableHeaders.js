import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";

export default function TableHeaders(props) {
  const sortAlphaDownIcon = <FontAwesomeIcon icon={faSortAlphaDown} />;

  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">
          Last Name{" "}
          <span type="button" onClick={props.handleSortedNames}>
            {sortAlphaDownIcon}
          </span>
        </th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
  );
}
