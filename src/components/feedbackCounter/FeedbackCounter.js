import React, { Component } from "react";
import css from "./FeedbackCounter.module.css";

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = ({ target: { name, value } }) => {
    this.setState({ [name]: Number(value) + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <p className={css.title}>Please leave feedback</p>
        <button
          className={css.btn}
          type="button"
          name="good"
          value={good}
          onClick={this.handleIncrement}
        >
          Good
        </button>
        <button
          className={css.btn}
          type="button"
          name="neutral"
          value={neutral}
          onClick={this.handleIncrement}
        >
          Neutral
        </button>
        <button
          className={css.btn}
          type="button"
          name="bad"
          value={bad}
          onClick={this.handleIncrement}
        >
          Bad
        </button>
        <p className={css.title}>Statistic</p>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Positive feedback: {this.countPositiveFeedbackPercentage() || 0} %
        </p>
      </>
    );
  }
}

export default FeedbackCounter;
