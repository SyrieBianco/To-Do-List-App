import { RECEIVE_TODOS, RECEIVE_TODO} from "../actions/actions";

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TODO:
      return {

      };
    case RECEIVE_TODOS:
      return {

      };
    default:
      return state;
  }
};

export default todosReducer;

// {
//   '1': {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   '2': {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// }
