import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UsersContextProvider } from './context/usersContext';

const root = ReactDOM.createRoot(
   document.getElementById('root')
);
root.render(
   <React.StrictMode>
      <UsersContextProvider>
         <App />
      </UsersContextProvider>
   </React.StrictMode>
);
