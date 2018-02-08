

export function search(gid){
    return {
        url: 'idchaxun',
        method: 'get',
        data: {id:gid}
    }
}

export function caring(data){
    return {
        url: 'sellcar',
        method: 'get',
        data: data
    }
}