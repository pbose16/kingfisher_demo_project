export const TIER1_OBJ_TEST = {
    a: '1',
    b: 2,
    c: true
}
export const TIER1_OBJ_RESULT_TEST = {
    ...TIER1_OBJ_TEST
}
export const TIER2_OBJ_TEST = {
    a: { b: 1 },
    c: { d: '1' },
    e: { f: true }
}
export const TIER2_OBJ_RESULT_TEST = {
    'a.b': 1,
    'c.d': '1',
    'e.f': true
}
export const MULTI_TIER_OBJ_TEST = {
    a: { b: 1 },
    c: { d: ['1', '2'] },
    e: { f: { g: 'hello' } }
}
export const MULTI_TIER_OBJ_RESULT_TEST = {
    'a.b': 1,
    'c.d.0': '1',
    'c.d.1': '2',
    'e.f.g': 'hello'
}
export const NESTED_ARRAY_TEST = [{ a: 1, b: '1' }, { c: [{ d: true }] }]
export const FLAT_NESTED_ARRAY_TEST = {
    '0.a': 1,
    '0.b': '1',
    '1.c.0.d': true
}