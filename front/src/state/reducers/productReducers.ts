import { Action} from '../actions/productActions'
import {ActionType} from '../action-types/index'


export const productListReducer = (state:{} = {products:[]},action:Action) => {
    switch(action.type){
        case ActionType.PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case ActionType.PRODUCT_LIST_SUCCESS:
            return {loading:false,products: action.payload}
        case ActionType.PRODUCT_LIST_FAILED:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}

export const productDetailsReducer = (state:{} = {product:{}},action:Action) => {
    switch(action.type){
        case ActionType.PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case ActionType.PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product: action.payload}
        case ActionType.PRODUCT_DETAILS_FAILED:
            return {loading:false, error: action.payload}
        default:
            return state
    }
}