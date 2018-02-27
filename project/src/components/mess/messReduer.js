import * as ajaxConstants from '../../constants/ajaxConstants'
import * as messConstants from './messConstants'

export default function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case messConstants.MESS_RQUESTING:
            newState.status = 0;
            break;
        case messConstants.MESS_RQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case messConstants.MESS_RQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}