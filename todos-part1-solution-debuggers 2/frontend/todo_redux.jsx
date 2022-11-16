import configureStore from './store/store';
import * as TodoActions from './actions/todo_actions';
import * as StepActions from './actions/step_actions';
import React from 'react';
import App from './components/app';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {};

  const store = configureStore(preloadedState);


  ReactDOM.render(<App />, document.getElementById("content"));

  // window.store = store;

  // window.TodoActions = TodoActions;
  // window.StepActions = StepActions;
  
});
