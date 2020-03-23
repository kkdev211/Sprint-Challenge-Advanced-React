import React from 'react';
import './App.css';
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/NavBar";

class App extends React.Component {
  constructor(){
    console.log('Constuctor Invoked!');
  super();
  this.state = {
    playerData: []
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
    var players = this.state.playerData
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <h1> USA Women's World Cup Players</h1>
         {players.map(player => {
          return <PlayerCard player={player} />;
        })} 
        </div>   
      </div>
    );
  }
  }

export default App;
