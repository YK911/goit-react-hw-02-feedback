import React from "react";
import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback
}) => {
  return (
    <>
      <button
        className={css.btn}
        type="button"
        name="good"
        value={good}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        name="neutral"
        value={neutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        name="bad"
        value={bad}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
