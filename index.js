const redux = require('redux');
const reduxLogger =require('redux-logger');

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//Actions Type
const BUY_SHIRT = 'BUY_SHIRT';
const BUY_PENT = 'BUY_PENT';
const BUY_LOFAR = 'BUY_LOFAR';

//Actions
const buyShirt = () => {
  return {
    type: BUY_SHIRT,
    info: 'First redux action',
  }
}

const buyPent = () => {
  return {
    type: BUY_PENT,
    info: 'First redux action',
  }
}

const buyLofar = () => {
  return {
    type: BUY_LOFAR,
    info: 'First redux action',
  }
}

const initialClothesState = {
  totalShirt: 10,
  totalPent: 20,
}

const initialShoesState = {
  totalLofar: 10,
}

const clothesReducer = (state =initialClothesState, action) => {
  switch (action.type) {
    case BUY_SHIRT: return {
      ...state,
      totalShirt: state.totalShirt - 1
    }
    case BUY_PENT: return {
      ...state,
      totalPent: state.totalPent - 1
    }
    default: return state
  }
}

const shoesReducer = (state =initialShoesState, action) => {
  switch (action.type) {
    case BUY_LOFAR: return {
      ...state,
       totalLofar: state.totalLofar - 1
    }
    default: return state
  }
}

const rootReducer = combineReducer({
  clothes: clothesReducer,
  shoes: shoesReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
// getState method return state of redux
console.log('Initial state', store.getState());

// subscribe method listen changes of state and call accordingly.
// store.subscribe return unsubscribe method
const  unsubscribe = store.subscribe(() => {}/*console.log('Updated State', store.getState())*/);

// dispatch is use for call action
store.dispatch( buyShirt());
store.dispatch( buyShirt());
store.dispatch( buyShirt());
store.dispatch( buyPent());
store.dispatch( buyPent());
store.dispatch( buyLofar());
store.dispatch( buyLofar());
store.dispatch( buyLofar());

//unsubscribe store
unsubscribe()