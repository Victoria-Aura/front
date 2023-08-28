import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavPanel} from '../NavPanel';
import { Brand } from '../Brand';
import { AboutUs } from '../AboutUs';
import { Disciplines } from '../Disciplines';

function App() {
  return (
    <div className="App">
      <NavPanel />
      <Brand />
      <AboutUs />
      <Disciplines />
    </div>

  );
}

export default App;
