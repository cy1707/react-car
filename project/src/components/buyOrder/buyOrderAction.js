import * as ajaxConstants from '../../constants/ajaxConstants'
import * as buyOrderConstants from './buyOrderConstants'

export function recommend(userName){
    return {
        url: 'getcar',
        data:{user_name:userName}
    }
}
