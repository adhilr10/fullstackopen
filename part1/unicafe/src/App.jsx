import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;

  if (total === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeed = () => {
    setGood(good + 1);
  };
  const neutralFeed = () => {
    setNeutral(neutral + 1);
  };
  const badFeed = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={goodFeed} text="good" />
        <Button onClick={neutralFeed} text="neutral" />
        <Button onClick={badFeed} text="bad" />
      </div>
      <h2>statistics</h2>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
