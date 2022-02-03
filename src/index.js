import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './component/Cart';
import Products from './component/Products';
import { Provider} from "mobx-react";
import RootStore from "./stores";
import reportWebVitals from './reportWebVitals';

const store = new RootStore();
console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider {...new RootStore()}>
      <Cart/>
      <Products/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
