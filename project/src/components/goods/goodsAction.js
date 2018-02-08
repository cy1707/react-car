export function getCartList(){
    return {
        url: 'getcartlist',
        data: {uid: 1}
    }
}

export function genOrder(cartids, goodsids){
    return {
        url: 'genorder',
        method: 'post',
        data: {uid: 1, cartids, goodsids}
    }
}

export function search(gid){
    return {
        url: 'idchaxun',
        method: 'get',
        data: {id:gid}
    }
}