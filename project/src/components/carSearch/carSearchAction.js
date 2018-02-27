import * as ajaxConstants from '../../constants/ajaxConstants'
import * as carSearchConstants from './carSearchConstants'

export function searchCar(data){
    return {
        types:[carSearchConstants.SEARCH_RQUESTING,carSearchConstants.SEARCH_RQUESTED,carSearchConstants.SEARCH_RQUESTERROR],
        url: 'hchaxun',
        data: {data:data},
    }
}
