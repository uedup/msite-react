import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import { Provider} from "mobx-react";
import RootStore from "./stores";


ReactDOM.render(
    <Provider {...new RootStore()}>
      <App/>
    </Provider>,
  document.getElementById('root')
);

