// import { createStore } from 'redux';

// const reducer = (state = {badgeCount: 0}, action) => {
//   console.log({ state, action })

//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         badgeCount: state.badgeCount + 1
//       }
//     default:
//       return state
//   }
// }

// const store = createStore(
//   reducer
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

// const reducer = (state = {badgeCount: 0}, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         badgeCount: state.badgeCount + 1
//       }
//     default:
//       return state
//   }
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return state.concat([action.text]);
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       break;
//   }
// };

const logger = (store) => (next) => (action) => {
  console.log("action", action);
  next(action);
};

// const checkAuth = (store) => next => action => {
//   debugger
//   if(!store.getState().user) {
//     next({ type: 'CLEAR_DATA'})
//   } else {
//     next(action)
//   }
// }

export default configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
