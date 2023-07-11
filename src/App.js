import './App.css';
import Recommender from './components/Recommender.js';

function App() {
  let questions = ["question 1", "question 2"];

  return (
    <div id="main">
      <h1 id="title">College Match 🎓</h1>
      <p>Welcome! I’m here to help you find the best fit colleges for your goals and preferences. To start, answer the questions below.</p>
      {questions.map((item, index) => (
        <p key={index}>{item}</p>
        ))}
      <Recommender/>
    </div>
  );
}

export default App;
