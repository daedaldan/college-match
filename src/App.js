import './App.css';
import Recommender from './components/Recommender.js';

function App() {
  return (
    <div id="main">
      <h1 id="title">College Match 🎓</h1>
      <p>Welcome! I’m here to help you find the best-fit colleges based on your goals and preferences. To start, answer the questions below.</p>
      <Recommender/>
      <footer><a href="https://github.com/daedaldan/college-match">Daniel Wang, 2023</a></footer>
    </div>
  );
}

export default App;
