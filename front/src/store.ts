import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './state/reducers/productReducers'
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer
})
const initialState = {}
const middleware = [thunk]
export const store = createStore(reducer,{},composeWithDevTools(applyMiddleware(...middleware)));

//inferred types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
