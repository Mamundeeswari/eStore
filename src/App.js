import './App.css';
import { CatNav } from './components/CatNav';
import { MainComponent } from './components/MainComponent';
import { TopNav } from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;
