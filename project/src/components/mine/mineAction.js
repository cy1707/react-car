import * as ajaxConstants from '../../constants/ajaxConstants'
import * as mineConstants from './mineConstants'

export function recommend(){
    return {
        types:[mineConstants.MY_RQUESTING,mineConstants.MY_RQUESTED,mineConstants.MY_RQUESTERROR],
        url: 'suggest',
    }
}

