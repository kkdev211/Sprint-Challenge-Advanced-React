import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import App from './App';
import Navbar from "./components/NavBar";
import PlayerCard from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //app renders to dom
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//nav bar renders to dom
test('renders Navbar without crashing', () => {
  rtl.render(<Navbar />);
});

//PlayerCard renders
test('renders PlayerCard without crashing', () => {
  const player = {
    "name": "test name",
    "country": "test country",
    "searches": "test searches"
  }
  rtl.render(<PlayerCard player={player}/>);
});