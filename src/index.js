import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { Provider} from "mobx-react";
import RootStore from "./stores";


ReactDOM.render(
  <React.StrictMode>
    <Provider {...new RootStore()}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

