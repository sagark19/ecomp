import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import baseUrl from '../../http-common'

export const listProducts = () => async (dispatch:Dispatch) => {
    try {
        dispatch({type:ActionType.PRODUCT_LIST_REQUEST})
        const { data }= await baseUrl.get('/products/getproducts')
        dispatch({type: ActionType.PRODUCT_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ActionType.PRODUCT_LIST_FAILED,payload:error.response && error.response.data.message ? 
        error.response.data.message : error.message})
    }
}

export const productDetails = (id:string) => async (dispatch:Dispatch) => {
    try {
        dispatch({type:ActionType.PRODUCT_DETAILS_REQUEST})
        const { data }= await baseUrl.get(`/products/getproductdetails/${id}`)
        dispatch({type: ActionType.PRODUCT_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ActionType.PRODUCT_DETAILS_FAILED,payload:error.response && error.response.data.message ? 
        error.response.data.message : error.message})
    }
}