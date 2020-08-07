import React from "react";

import TableHeaders from "./TableHeaders";
import TableBody from "./TableBody";

export default function Table(props) {
  console.log(props);
  return (
    <table className="table">
      <TableHeaders />
      <TableBody data={props.data} />
    </table>
  );
}
