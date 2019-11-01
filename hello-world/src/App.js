import React from 'react';
import './App.css';
import Hello from './components/hello'
import Welcome from './components/classC'
import Greet from './components/funC';
function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      <Hello />
    </div>
  );
}

export default App;
