import * as ajaxConstants from '../../constants/ajaxConstants'
import * as sellConstants from './sellConstants'


export default function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case sellConstants.SELL_REQUESTING:
            newState.status = 0;
            break;
        case sellConstants.SELL_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case sellConstants.SELL_REQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}
