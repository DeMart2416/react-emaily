import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="App-link" href="/auth/google">Sign In With Google</a>
        <a className="App-link" href="/api/current_user">Current User</a>
        <a className="App-link" href="/api/logout">Sign Out</a>
      </header>
    </div>
  );
}

export default App;
