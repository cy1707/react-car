import * as ajaxConstants from '../../constants/ajaxConstants'
import * as sellConstants from './sellConstants'

export function selling(data){
    return {
        types:[sellConstants.SELL_RQUESTING,sellConstants.SELL_RQUESTED,sellConstants.SELL_RQUESTERROR],
        url: 'getorders',
        method: 'get',
        data: data
    }
}