import React from "react";
import styles from "./Filter.module.css";

export default function Filter({ filters, filter, onchangeFilter }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index} className={styles.filter}>
            <button
              onClick={() => {
                onchangeFilter(value);
              }}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
