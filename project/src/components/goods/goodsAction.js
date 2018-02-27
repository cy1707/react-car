import * as ajaxConstants from '../../constants/ajaxConstants'
import * as  goodsConstants from './goodsConstants'


export function search(gid){
    return {
        url: 'idchaxun',
        method: 'get',
        data: {id:gid}
    }
}

export function write(data){
    return {
        types:[goodsConstants.GOODS_RQUESTING,goodsConstants.GOODS_RQUESTED,goodsConstants.GOODS_RQUESTERROR],
        url: 'orderx',
        method: 'get',
        data: data
    }
}