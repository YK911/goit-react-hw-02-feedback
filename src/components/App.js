import React, { Component } from "react";
import Section from "./section/Section";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
// import FeedbackCounter from "./feedbackCounter/FeedbackCounter";

export default class App extends Component {
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <p
              style={{
                fontFamily: "Gill Sans, cursive",
                fontStyle: "italic",
                fontSize: 18,
                fontWeight: 600
              }}
            >
              No feedback given
            </p>
          )}
        </Section>
      </>
    );
  }
}

// function App() {
//   return {
//     /* <FeedbackCounter /> */
//   };
// }

// export default App;
