import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './data/StateProvider'
import reducer, { initalState } from './data/Reducer'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initalState={initalState} reducer={reducer}>
      <App />
    </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

