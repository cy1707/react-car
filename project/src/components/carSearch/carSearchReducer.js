import * as ajaxConstants from '../../constants/ajaxConstants'
import * as carSearchConstants from './carSearchConstants'

export default function carSearchReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || carSearchConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            console.log('reducer的',action.result.results)
            
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || carSearchConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case carSearchConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}