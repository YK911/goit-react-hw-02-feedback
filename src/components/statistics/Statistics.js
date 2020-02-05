import React from "react";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <span className={css.titleItem}>Good: {good}</span>
      <span className={css.titleItem}>Neutral: {neutral}</span>
      <span className={css.titleItem}>Bad: {bad}</span>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage() || 0} %</p>
    </>
  );
};

export default Statistics;
