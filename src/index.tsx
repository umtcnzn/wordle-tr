import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import { GameContextProvider } from './context/GameContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
      <Toaster/>
    </GameContextProvider>
  </React.StrictMode>
);

