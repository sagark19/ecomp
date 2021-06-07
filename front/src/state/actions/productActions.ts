import { ActionType } from '../action-types/index'

interface RequestAction {
    type: ActionType.PRODUCT_LIST_REQUEST | ActionType.PRODUCT_DETAILS_REQUEST
    payload:[]
}

interface SuccessAction {
    type: ActionType.PRODUCT_LIST_SUCCESS | ActionType.PRODUCT_DETAILS_SUCCESS
    payload:[]
}

interface FailedtAction {
    type: ActionType.PRODUCT_LIST_FAILED | ActionType.PRODUCT_DETAILS_FAILED
    payload:[]
}

export type Action =  RequestAction | SuccessAction | FailedtAction
