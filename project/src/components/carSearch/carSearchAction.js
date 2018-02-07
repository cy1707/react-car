import * as ajaxConstants from '../../constants/ajaxConstants'
import * as carSearchConstants from './carSearchConstants'

export function searchCar(data){
    return {
        url: 'hchaxun',
        data: {data:data},
    }
}
