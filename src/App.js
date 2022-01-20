import './App.css';
import { Component } from 'react';
import Paris from './Paris';
import NYC from './NYC';


class App extends Component  {

  state = {
    city: true
  }

  render() {
    const btnText = this.state.city ? "New York" : "Paris";
    
    return (
      <div>
        <p>{this.state.city ? <Paris/> : <NYC/>}</p>
        <button onClick={() =>{this.setState({city: !this.state.city})}}>{btnText}</button>
      </div>
    );
  }
}

export default App;
