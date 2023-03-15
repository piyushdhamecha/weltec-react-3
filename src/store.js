import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  console.log({ state, action })

  switch (action.type) {
    case 'ADD_TO_CART':
      return state + 1
    default:
      return state
  }
}

const store = createStore(
  reducer
);

export default store;