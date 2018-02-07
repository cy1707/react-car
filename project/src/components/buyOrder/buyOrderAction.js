import * as ajaxConstants from '../../constants/ajaxConstants'
import * as buyOrderConstants from './buyOrderConstants'

export function recommend(userId){
    return {
        url: 'getcar',
        data:{user_id:userId}
    }
}
