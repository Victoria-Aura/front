import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavPanel} from '../NavPanel';
import { Brand } from '../Brand';
import { AboutUs } from '../AboutUs';
import { Disciplines } from '../Disciplines';

import News from '../News/News'
import NewsService from '../../API/NewsService';
import { useFetching } from '../../hooks/useFetching';



function App() {
  return (
    <div className="App">
      <NavPanel />
      <Brand />
      <AboutUs />
      <News />
      <Disciplines />
    </div>

  );
}

export default App;
