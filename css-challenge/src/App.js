import './App.css';
import FeelingsSection from './components/FeelingsSection';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ExercisesSection from './components/ExercisesSection';
import BottomNavBar from './components/BottomNavBar';
import ScrollBar from './components/ScrollBar';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="innerContainerTop">
          <Header />
          <SearchBar />
          <FeelingsSection />
        </div>

        <div className="innerContainerBottom">
          <ScrollBar />
          <ExercisesSection />
          <BottomNavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
