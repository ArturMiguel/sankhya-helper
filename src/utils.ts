export interface IObject {
    [key: string]: any
}

export function parseObj(object: IObject) {
    const _object: IObject = {};
    for (let key of Object.keys(object)) {
        _object[key] = {
            $: object[key].toString()
        }
    }
    return _object;
}