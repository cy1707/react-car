import * as ajaxConstants from '../../constants/ajaxConstants'
import * as prolistConstants from './prolistConstants'

export default function prolistReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || prolistConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results[0];
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || prolistConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case prolistConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}