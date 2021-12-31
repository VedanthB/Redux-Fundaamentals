import {
  applyMiddleware,
  bindActionCreators,
  compose,
  createStore,
  combineReducers
} from "redux";

const reducer = (state) => state;

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

const store = createStore(reducer, monitorReducerEnhancer);
