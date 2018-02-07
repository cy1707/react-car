import * as ajaxConstants from '../../constants/ajaxConstants'
import * as buyOrderConstants from './buyOrderConstants'

export default function carRecommendReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || buyOrderConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            // console.log('buyOrder的',action.result.results)
            
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || buyOrderConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case buyOrderConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}