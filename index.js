import { createStore } from 'Redux'

const initialState = {
    value: 0
}
function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 }
      case 'DECREMENT':
        return { value: state.value - 1 }
      default:
        return state
    }
  }
  let store = createStore(counterReducer)

  console.log('store', store);