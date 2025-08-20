type Flatten = {
    [key: string]: any
}
const testObj: Flatten = {
    a: 1,
    b: {
        c: 'hello',
        d: {
            e: true
        }
    },
    f: [{ g: 'world' }],
    h: 'yes'


}
const result: Flatten = {
    a: '1',
    'b.c': 'hello',
    'b.d.e': true,
    'f.0.g': 'world'

}
export const flattenObjectHelper = (obj: Flatten = testObj): Flatten => {
    let flattenObj: Flatten = {}
    for (const key in obj) {
        if (isNotNullObject(obj[key])) {
            const tempObject = flattenObjectHelper(obj[key])
            for (const innerKey in tempObject) {
                const tempInnerObject = checkNativeTypes(tempObject[innerKey] as Flatten)
                if (tempInnerObject) {
                    flattenObj[`${key}.${innerKey}`] = tempInnerObject
                }
            }
        }
        else {
            const tempValue = checkNativeTypes(obj[key])
            if (tempValue) {
                flattenObj[key] = tempValue
            }
        }
    }
    console.log('**Expected Value**', result)
    console.log('***FINAL VALUE**', flattenObj)
    return flattenObj

}

const checkNativeTypes = (tempObj: Flatten): Flatten | null => {
    const nativeTypes = ['number', 'string', 'boolean']
    if (tempObj !== null && nativeTypes.includes(typeof tempObj))
        return tempObj
    else return null
}

const isNotNullObject = (obj: Flatten): boolean => {
    return obj !== null && typeof obj === 'object'
}