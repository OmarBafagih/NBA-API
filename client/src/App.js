import logo from './logo.svg';
import './App.css';
import LiveGames from './LiveGames';
import ParticlesBackground from './ParticlesBackground';
function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      
      <header className="App-header">
        <LiveGames/>
        
      </header>
      
      
    </div>
  );
}

export default App;
