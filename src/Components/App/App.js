import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavPanel} from '../NavPanel';
import Brand from '../Brand/Brand';
import { AboutUs } from '../AboutUs';
import { Disciplines } from '../Disciplines';

import News from '../News/News'


function App() {
  return (
    <div className="App">
      <NavPanel />
      <Brand />
      <News />
      <Disciplines />
    </div>

  );
}

export default App;
