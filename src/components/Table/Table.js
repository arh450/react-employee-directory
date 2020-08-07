import React from "react";

import TableHeaders from "./TableHeaders";
import TableBody from "./TableBody";

export default function Table() {
  return (
    <table className="table">
      <TableHeaders />
      <TableBody />
    </table>
  );
}
