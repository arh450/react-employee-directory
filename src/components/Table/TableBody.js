import React from "react";

export default function TableBody(props) {
  console.log(props.data);
  return (
    <tbody>
      {props.data.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.role}</td>
          <td>{employee.email}</td>
        </tr>
      ))}
    </tbody>
  );
}
