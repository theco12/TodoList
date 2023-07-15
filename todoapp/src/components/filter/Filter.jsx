import React from "react";

export default function Filter({ filters, filter, onchangeFilter }) {
  return (
    <ul>
      {filters.map((value, index) => (
        <li key={index}>
          <button
            onClick={() => {
              onchangeFilter(value);
            }}>
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
}
