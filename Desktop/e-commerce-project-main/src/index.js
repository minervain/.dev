import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './reset.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>

  <ChakraProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </BrowserRouter>
  </Provider>

  
);

