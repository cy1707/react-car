import * as ajaxConstants from '../../constants/ajaxConstants'


export function caring(data){
    return {
        url: 'sellcar',
        method: 'get',
        data: data
    }
}