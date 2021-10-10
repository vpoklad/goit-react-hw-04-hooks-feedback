import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notifiaction';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / total);
  };
  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="app">
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={posPercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
