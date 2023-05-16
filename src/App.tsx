import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';

import { StoreNavbar } from './components/StoreNavbar';
import { AppRouter } from './routes/Router';

function App() {
  return (
    <div className="App">
      <StoreNavbar />
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
