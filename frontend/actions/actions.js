export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const addTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const addTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});
