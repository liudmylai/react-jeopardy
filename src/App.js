import './App.css';
import { GameProvider } from './contexts/GameContext';
import Header from './components/Header';
import Score from './components/Score';
import Play from './components/Play';
import QuestionList from './components/QuestionList';
import Footer from './components/Footer';


function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <Score />
        <Play />
        <QuestionList />
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App;
