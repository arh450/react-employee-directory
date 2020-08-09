import React from "react";

import TableHeaders from "./TableHeaders";
import TableBody from "./TableBody";
import "./style.css";

export default function Table(props) {
  // console.log(props);
  return (
    <div className="container">
      <table className="table mt-5">
        <TableHeaders
          handleSortedNames={props.handleSortedNames}
          handleSortReset={props.handleSortReset}
        />
        <TableBody data={props.data} />
      </table>
    </div>
  );
}
