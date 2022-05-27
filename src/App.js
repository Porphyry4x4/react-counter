import { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter.jsx';
import Counters from './components/counters/Counters.jsx';
import NavBar from './components/Navbar/NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    imgURL: 'C:\Users\Victor\Desktop\wordPress_Logo.png'
  };
  render(){
  return (
    <div className="App">
      <h1>Hello, Porphyry's Wanderers</h1> <NavBar />
          <img src='this.state.imgURL' alt="Porphyry's logo"/>
          <main>
            <Counters />
          </main>
      
    </div>
  );}
}

export default App;
