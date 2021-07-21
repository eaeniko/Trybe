import logo from './logo.svg';
import './App.css';

const study = ['estudar1', 'estudar2', 'estudar3', 'estudar4']
const Task = (value) => {
  return (
      <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
        {study.map((st) => Task(st) )}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
