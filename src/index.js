import {
  applyMiddleware,
  bindActionCreators,
  compose,
  createStore
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

embolden(repeatThreeTimes(makeLouder("hello")));

// const makeLouderAndBoldAndRepeatThreeTimes = (string) =>
//   embolden(repeatThreeTimes(makeLouder(string)));

const makeLouderAndBoldAndRepeatThreeTimes = compose(
  embolden,
  repeatThreeTimes,
  makeLouder
);

// is the same as
//  const makeLouderAndBoldAndRepeatThreeTimes = (string) =>
//   embolden(repeatThreeTimes(makeLouder(string)));

console.log(makeLouderAndBoldAndRepeatThreeTimes("ved "));
