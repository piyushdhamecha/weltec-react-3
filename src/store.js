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

import { configureStore } from '@reduxjs/toolkit'

const reducer = (state = {badgeCount: 0}, action) => {
  console.log({ state, action })

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        badgeCount: state.badgeCount + 1
      }
    default:
      return state
  }
}

export default configureStore({
  reducer,
})