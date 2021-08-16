// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import allReducers from './reducer';

// const store = createStore(allReducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TODO from './reducer';

const store = createStore(
  TODO,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
