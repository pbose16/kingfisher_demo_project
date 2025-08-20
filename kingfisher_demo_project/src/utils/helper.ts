type Flatten = {
    [key: string]: any
}

export const flattenObject = (obj: Flatten): Flatten => {
    let flattenObj: Flatten = {}
    if (Object.keys(obj).length) {

        for (const key in obj) {
            if (isNotNullObject(obj[key] as Flatten)) {

                const tempObject = flattenObject(obj[key])
                for (const innerKey in tempObject) {
                    flattenObj[`${key}.${innerKey}`] = checkNativeTypes(tempObject[innerKey] as Flatten)
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

const checkNativeTypes = (tempObj: Flatten): Flatten | null => {
    const nativeTypes = ['number', 'string', 'boolean']
    return (tempObj !== null && nativeTypes.includes(typeof tempObj)) ? tempObj : null
}

const isNotNullObject = (obj: Flatten): boolean => {
    return obj !== null && typeof obj === 'object'
}