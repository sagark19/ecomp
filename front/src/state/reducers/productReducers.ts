import { Action} from '../actions/productActions'
import {ActionType} from '../action-types/index'


export const productListReducer = (state:{} = {products:[]},action:Action) => {
    switch(action.type){
        case ActionType.PRODUCT_LIST_REQUEST:
            return {loading:true,products:[]}
        case ActionType.PRODUCT_LIST_SUCCESS:
            return {loading:false,products: action.payload}
        case ActionType.PRODUCT_LIST_FAILED:
            return {loading:true, error: action.payload}
        default:
            return state
    }
}