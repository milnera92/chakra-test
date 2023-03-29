import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a basic react app. I am using Chakra UI.
        </p>
        <Button colorScheme='blue'>Chakra!</Button>

      </header>
    </div>
  );
}

export default App;
