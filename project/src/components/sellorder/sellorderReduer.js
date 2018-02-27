import * as ajaxConstants from '../../constants/ajaxConstants'
import * as sellorderConstants from './sellorderConstants'


export default function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case sellorderConstants.SELLORDER_RQUESTING:
            newState.status = 0;
            break;
        case sellorderConstants.SELLORDER_RQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case sellorderConstants.SELLORDER_RQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}