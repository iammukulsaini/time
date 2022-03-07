import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Clock from 'react-live-clock';

ReactDOM.render(
  
    // <App /> 
    <div>
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />
  </div> ,
  document.getElementById('root')
);


