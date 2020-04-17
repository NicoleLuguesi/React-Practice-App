import React, {Component} from 'react';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message'
import Counter from './components/Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter />
      {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman" >
          <p>This is children props</p>
        </Greet>Greet>
        <Greet name="Clark" heroName="Superman"/>
        <button>Action</button>
        <Greet name="Diana" heroName="Wonderwoman"/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonderwoman"/>
        <Hello /> */}
      </div>
    );
   }
  }

export default App;

