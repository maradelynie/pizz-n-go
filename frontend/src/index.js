import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/navigation';

import './style/style.scss';

import Routes from './routes';

import Header from './components/header';

import {Provider} from "react-redux";
import Store from "./redux/storage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Header />
        <main className="main_content">
          <BrowserRouter>
              <Navigation />
              <Routes/>
          </BrowserRouter>
           
        </main>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

