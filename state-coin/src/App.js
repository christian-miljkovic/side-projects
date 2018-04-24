import React, { Component } from 'react';
import Header from './components/common/Header.js';
import RoomBox from './components/roombox/RoomBox.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <RoomBox />
      </div>
    );
  }
}

export default App;
