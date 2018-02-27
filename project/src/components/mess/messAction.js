import * as ajaxConstants from '../../constants/ajaxConstants'
import messConstants from './messConstants'

export function looking(data){
    return {
        types:[messConstants.MESS_RQUESTING,messConstants.MESS_RQUESTED,messConstants.MESS_RQUESTERROR],
        url: 'bookcar',
        method: 'get',
        data: data
    }
}