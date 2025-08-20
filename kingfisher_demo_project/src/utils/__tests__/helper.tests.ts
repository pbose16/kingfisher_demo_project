import * as helperFunctions from '../helper'
import * as CONSTANTS from '../mockConstants'

describe('flattenObject function tests', () => {
    const { flattenObject } = helperFunctions
    it('should return empty object if empty object is received', () => {
        expect(flattenObject({})).toEqual({})
    })

    it('should flatten 1 tier object', () => {
        expect(flattenObject(CONSTANTS.TIER1_OBJ_TEST)).toEqual(CONSTANTS.TIER1_OBJ_RESULT_TEST)
    })

    it('should flatten 2 tier object', () => {
        expect(flattenObject(CONSTANTS.TIER2_OBJ_TEST)).toEqual(CONSTANTS.TIER2_OBJ_RESULT_TEST)
    })


    it('should flatten multi tier object', () => {
        expect(flattenObject(CONSTANTS.MULTI_TIER_OBJ_TEST)).toEqual(CONSTANTS.MULTI_TIER_OBJ_RESULT_TEST)
    })

    it('should flatten object if input param is array of nested object', () => {
        expect(flattenObject(CONSTANTS.NESTED_ARRAY_TEST)).toEqual(CONSTANTS.FLAT_NESTED_ARRAY_TEST)
    })

    it('should not flatten object when checkNativeType returns null', () => {
        jest.spyOn(helperFunctions, 'checkNativeTypes').mockReturnValue(null)
        expect(flattenObject(CONSTANTS.MULTI_TIER_OBJ_TEST)).toEqual({})
    })
})
describe('checkNativeTypes function tests', () => {
    const { checkNativeTypes } = helperFunctions
    it('should return null if received object is not containing native data type', () => {
        expect(checkNativeTypes(CONSTANTS.TIER1_OBJ_TEST)).toEqual(null)
    })
})