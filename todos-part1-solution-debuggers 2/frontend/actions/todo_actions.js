export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TODO_ERROR = 'TODO_ERROR';

export const receiveTodos = todos => {
  // debugger
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const receiveTodo = todo => {
  // debugger
  return {
    type: RECEIVE_TODO,
    todo,
  };
};

export const removeTodo = todo => {
  // debugger
  return {
    type: REMOVE_TODO,
    todo,
  };
};

export const todoError = error => {
  // debugger
  return {
    type: TODO_ERROR,
    error,
  };
};
