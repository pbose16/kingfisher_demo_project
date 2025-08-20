type FlattenObjectTest = {
    [key: string]: any
}
const testObj = {
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
const result = {
    a: '1',
    'b.c': 'hello',
    'b.d.e': true,
    'f.0.g': 'world'

}
export const flattenObjectHelper = (obj: any = testObj) => {
    let flattenObj: any = {}
    const nativeTypes = ['number', 'string', 'boolean']
    Object.keys(obj).forEach((key) => {
        console.log('**Value Value**', obj)
        console.log('**Key Value**', key)
        if (obj[key] !== null) {
            if (nativeTypes.includes(typeof obj[key])) {
                flattenObj[key] = obj[key]
            }
        }
        if (typeof obj[key] === 'object') {
            console.log('Test Log')

        }

    })
    console.log('**Expected Value**', result)
    console.log('***FINAL VALUE**', flattenObj)

}