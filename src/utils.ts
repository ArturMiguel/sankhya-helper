export interface Object {
    [key: string]: any
}

export function parseObj(object: Object) {
    const _object: Object = {};
    for (let key of Object.keys(object)) {
        _object[key] = {
            $: object[key].toString()
        }
    }
    return _object;
}