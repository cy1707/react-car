

export function search(gid){
    return {
        url: 'idchaxun',
        method: 'get',
        data: {id:gid}
    }
}

export function looking(data){
    return {
        url: 'bookcar',
        method: 'get',
        data: data
    }
}