import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: 'center' }}
        >
          <img src={'./assets/bgimage.jpg'} alt='hero' style={{ width: '50%', margin: '0 auto' }} />
        </a>
      </header>
    </div>
  );
}

export default App;
