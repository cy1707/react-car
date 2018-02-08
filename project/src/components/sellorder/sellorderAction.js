export function search(gid){
    return {
        url: 'idchaxun',
        method: 'get',
        data: {id:gid}
    }
}



export function selling(data){
    return {
        url: 'getorders',
        method: 'get',
        data: data
    }
}

export function order(data){
    return {
        url: 'getdata',
        method: 'get',
        data: data
    }
}