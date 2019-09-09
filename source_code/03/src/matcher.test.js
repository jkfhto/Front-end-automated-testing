/**
 * Jest 匹配器 (Matcher)
 */
//toBe
test('two plus one is three', () => {
    expect(2 + 1).toBe(3);
});

//toEqual
test('object assignment', () => {
    const data = { aa: 1 };
    expect(data).toEqual({ aa: 1 });
});

//真假值
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//数字
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe 和 toEqual 在数字类型上作用等同
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('两个浮点数字相加', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); //这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
});

//字符串
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

//数组
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
});

//异常

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // 您同样可以使用明确的错误消息或正则表达式
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});