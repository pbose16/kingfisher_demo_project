type FlattenType = {
    [key: string]: any
}

export const flattenObject = (obj: FlattenType): FlattenType => {
    let flattenObj: FlattenType = {}
    if (Object.keys(obj).length) {

        for (const key in obj) {
            if (isNotNullObject(obj[key] as FlattenType)) {

                const tempObject = flattenObject(obj[key])
                for (const innerKey in tempObject) {
                    flattenObj[`${key}.${innerKey}`] = checkNativeTypes(tempObject[innerKey] as FlattenType)
                }
            }
            else {
                const tempValue = checkNativeTypes(obj[key])
                if (tempValue) {
                    flattenObj[key] = tempValue
                }
            }
        }
    }
    return flattenObj

}

export const checkNativeTypes = (tempObj: FlattenType): FlattenType | null => {
    const nativeTypes = ['number', 'string', 'boolean']
    return (tempObj !== null && nativeTypes.includes(typeof tempObj)) ? tempObj : null
}

const isNotNullObject = (obj: FlattenType): boolean => {
    return obj !== null && typeof obj === 'object'
}