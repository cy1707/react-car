import * as ajaxConstants from '../../constants/ajaxConstants'
import * as mineConstants from './mineConstants'

export default function carRecommendReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case  mineConstants.MY_RQUESTING:
            newState.status = 0;
            break;
        case  mineConstants.MY_RQUESTED:
            newState.status = 1;
            newState.myresult = action.result.results;
            // console.log('reducer的',action.result.results)
            
            break;
        case  mineConstants.MY_RQUESTERROR:
            newState.status = -1;
            break;
       
    }
    return newState;
}