// import { sum, minus, multi } fr('./math.js');
import { sum, minus, multi } from "./math.js";

test('测试加法 3+3 等于6', () => {
    expect(sum(3, 3)).toBe(6);
})


test('测试减法 3-3 等于0', () => {
    expect(minus(3, 3)).toBe(0);
})

test('测试乘法 3*3 等于9', () => {
    expect(multi(3, 3)).toBe(9);
})