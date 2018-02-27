import * as goodsConstants from './goodsConstants'

export default function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case goodsConstants.GOODS_RQUESTING :
            newState.status = 0;
            break;
        case goodsConstants.GOODS_RQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case goodsConstants.GOODS_RQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}