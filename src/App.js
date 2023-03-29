import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a basic react app. I am using Chakra UI. Here is a Chakra button.
        </p>
        <Button colorScheme='blue'>Button</Button>
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
