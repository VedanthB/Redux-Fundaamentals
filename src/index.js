import {
  applyMiddleware,
  bindActionCreators,
  compose,
  createStore,
  combineReducers
} from "redux";

const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Wes" }
  ],
  tasks: [
    { title: "File the TPS reports", assignedTo: 1 },
    { title: "Order more toner for the printer", assignedTo: null }
  ]
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = (title) => ({ type: ADD_TASK, payload: { title } });
const addUser = (name) => ({ type: ADD_USER, payload: { name } });

const users = (state = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...state, action.payload];
  }

  return state;
};

const tasks = (state = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...state, action.payload];
  }

  return state;
};

const reducer = combineReducers({ users, tasks });

const store = createStore(reducer, initialState);

store.dispatch(addUser("ved"));
store.dispatch(addTask("vedVedved"));

console.log(store.getState());
