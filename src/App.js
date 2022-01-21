import './App.css';
import { GameProvider } from './contexts/GameContext';
import Header from './components/Header';
import Score from './components/Score';
import Play from './components/Play';
import QuestionList from './components/QuestionList';
import Question from './components/Question';
import Footer from './components/Footer';


function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <Score />
        <Play />
        <QuestionList />
        <Question />
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App;
