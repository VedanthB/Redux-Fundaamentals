import {
  applyMiddleware,
  bindActionCreators,
  compose,
  createStore,
  combineReducers
} from "redux";

const reducer = (state = { count: 1 }) => state;

const monitorReducerEnhancer = (createStore) => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = Math.round(end - start);

    console.log("Reducer process time:", diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const logReducerEnhancer = (createStore) => (
  reducer,
  initialState,
  enhancer
) => {
  const logReducer = (state, action) => {
    console.log("old state", state, action);
    const newState = reducer(state, action);
    console.log("new state", newState, action);

    return newState;
  };

  return createStore(logReducer, initialState, enhancer);
};

// const store = createStore(
//   reducer,
//   compose(logReducerEnhancer, monitorReducerEnhancer)
// );

const logMiddleware = (store) => (next) => (action) => {
  console.log("Before", store.getState(), { action });
  next(action);
  console.log("After", store.getState(), { action });
};

const monitorMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = Math.round(end - start);

  console.log("Reducer process time:", diff);
};
// const middlewares = applyMiddleware(logMiddleware);
// const enhancer = compose(middleware, logEnhancer);

const store = createStore(
  reducer,
  applyMiddleware(logMiddleware, monitorMiddleware)
);

store.dispatch({ type: "cool" });
store.dispatch({ type: "cool is cool" });
store.dispatch({ type: "cool is cool1" });
store.dispatch({ type: "cool is cool2" });
