import React from 'react';
import './App.css';
import PlayerList from "./components/PlayerList";

class App extends React.Component {
  constructor(){
    console.log('Constuctor Invoked!');
  super();
  this.state = {
    playerData: "",
    }
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(player => {
        console.log("kk: App.js: CDM: fetch: then2: player: ", player);
        this.setState({playerData: player});
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> Women's World Cup Players</h1>
          <PlayerList 
            user={this.state.playerData}
          /> 
        </div>   
      </div>
    );
  }
  }

export default App;
