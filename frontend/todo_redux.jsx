import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';

document.addEventListener('DOMContentLoaded', ()=> {
  // const store = createStore;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Todo App!</h1>, rootEl);
});



// ReactDOM.render(<Root store={store}/>, rootEl);
