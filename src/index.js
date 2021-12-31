import {
  applyMiddleware,
  bindActionCreators,
  compose,
  createStore
} from "redux";

const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

const increment = () => ({ type: INCREMENT });
const add = (number) => ({ type: ADD, payload: number });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }

  return state;
};

let store = createStore(reducer);

console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(add(10));
console.log(store.getState());
