import React from 'react';
import ReactDOM from 'react-dom';
import "tabler-react/dist/Tabler.css";
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import { Home, KeyCode, Custom, Docs } from './pages';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

var ghProjectName = window.location.pathname.split('/')[1];

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={`/${ghProjectName}/docs`} component={Docs} />
        <Route path={`/${ghProjectName}/keycode`} component={KeyCode} />
        <Route path={`/${ghProjectName}/:path`} component={Custom} />
        <Route path={`/${ghProjectName}`} component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
);