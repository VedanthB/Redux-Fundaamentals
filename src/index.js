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

const subsscriber = () => console.log("subscriber!", store.getState());

const unsubscribe = store.subscribe(subsscriber);

unsubscribe();

// if we want to put em in a neat package

// const dispatchIncrement = () => store.dispatch(increment());
// const dispatchAdd = (number) => store.dispatch(add(number));

// dispatchIncrement();
// dispatchAdd();

// or

// using compose

// const dispatchIncrement = compose(store.dispatch, increment);
// const dispatchAdd = compose(store.dispatch, add);

// or

// using compose to combine both functions

// const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) =>
//   compose(store.dispatch, fn)
// );

// using bindActionCreators

const actions = bindActionCreators(
  {
    increment,
    add
  },
  store.dispatch
);

actions.increment();
actions.add(10);
actions.add(100);
actions.increment();

console.log(store.getState());
