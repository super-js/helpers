
export interface IMakeArrayOfObjectsFlatOptions {
    nestedKey?: string;
}

export const makeArrayOfObjectsFlat = (arrayOfObject: {}[], options: IMakeArrayOfObjectsFlatOptions = {}) => {
    const {nestedKey} = options;
    return arrayOfObject.flatMap(obj => {
        return [
            obj,
            ...nestedKey && Array.isArray(obj[nestedKey]) && obj[nestedKey].length > 0 ?
                makeArrayOfObjectsFlat(obj[nestedKey], {nestedKey}) : []
        ]
    });
}