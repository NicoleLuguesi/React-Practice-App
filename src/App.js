import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman" >
          <p>This is children props</p>
        </Greet>Greet>
        <Greet name="Clark" heroName="Superman"/>
        <button>Action</button>
        <Greet name="Diana" heroName="Wonderwoman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonderwoman"/>
        <Hello />
      </div>
    );
   }
  }

export default App;

