import React from "react";
import styles from "../../styles/switch.module.css";

const Switch = ({ rounded = false }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        data-checked="내 얼굴 공개"
        date-unchecked="내 얼굴 비공개"
      />
      <span className={styles.slider} />
    </label>
  );
};

export default Switch;
