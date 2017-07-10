import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {getAllTodos} from './reducers/selectors';
import {addTodo, addTodos} from "./actions/actions";



document.addEventListener('DOMContentLoaded', ()=> {
  // const store = createStore;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Todo App!</h1>, rootEl);
  const store = configureStore();
  window.store = store;
  window.getAllTodos = getAllTodos;
  window.addTodo = addTodo;
  window.addTodos = addTodos;
});
