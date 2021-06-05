import { ActionType } from '../action-types/index'

interface RequestAction {
    type: ActionType.PRODUCT_LIST_REQUEST
    payload:[]
}

interface SuccessAction {
    type: ActionType.PRODUCT_LIST_SUCCESS
    payload:[]
}

interface FailedtAction {
    type: ActionType.PRODUCT_LIST_FAILED
    payload:[]
}

export type Action =  RequestAction | SuccessAction | FailedtAction