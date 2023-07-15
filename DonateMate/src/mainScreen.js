import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <img class="logo" src="logo.png"/>
        <p class="title">Donate Mate</p>
      </header>
      <div class="buttonRow">
        <button id="needDevice" class="buttonMain">
          Need a device?
        </button>
        <button id="giveDevice" class="buttonMain">
          Donate or Share
        </button>
      </div>
      

    </div>
  );
}

export default App;
