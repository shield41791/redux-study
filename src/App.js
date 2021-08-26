import './App.css';
import React from 'react';
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends React.Component {
  state = { number: 0 }

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot/>
        <DisplayNumberRoot/>
      </div>
    );
  }
}

export default App;
