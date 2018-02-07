import * as ajaxConstants from '../../constants/ajaxConstants'
import * as mineConstants from './mineConstants'

export default function carRecommendReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || mineConstants.ADDCART_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            // console.log('reducer的',action.result.results)
            
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || mineConstants.ADDCART_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case mineConstants.ADDCART_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}