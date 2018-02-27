import * as ajaxConstants from '../../constants/ajaxConstants'
import * as buyOrderConstants from './buyOrderConstants'

export function recommend(userName){
    return {
        // types:[buyOrderConstants.ADDCART_RQUESTING,buyOrderConstants.ADDCART_RQUESTED,buyOrderConstants.ADDCART_RQUESTERROR],
        url: 'getcar',
        data:{user_name:userName}
    }
}
