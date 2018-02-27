import * as ajaxConstants from '../../constants/ajaxConstants'
import * as sellorderConstants from './sellorderConstants'


export function order(data){
    return {
        types:[sellorderConstants.SELLORDER_RQUESTING,sellorderConstants.SELLORDER_RQUESTED,sellorderConstants.SELLORDER_RQUESTERROR],
        url: 'getdata',
        method: 'get',
        data: data
    }
}