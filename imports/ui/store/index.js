import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import productsReducer from './modules/products/reducer'
// -----------------------------------
const reducers = combineReducers({ produtos: productsReducer })

console.log('passou pela criação do store')

const store = createStore(reducers, applyMiddleware(thunk))

export default store
