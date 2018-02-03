import * as ajaxConstants from '../../constants/ajaxConstants'
import * as prolistConstants from './prolistConstants'

export function getGoods(){
    return {
        url: 'goods',
        data: {page: 1}
    }
}

export function addCart(gid){
    return {
        types: [prolistConstants.ADDCART_RQUESTING, prolistConstants.ADDCART_RQUESTED, prolistConstants.ADDCART_RQUESTERROR],
        url: 'addcart',
        method: 'post',
        data: {proid: gid}
    }
}