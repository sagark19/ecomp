import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productListReducer } from './state/reducers/productReducers'
const reducer = combineReducers({
    producList:productListReducer
})
const initialState = {}
const middleware = [thunk]
export const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(...middleware)));