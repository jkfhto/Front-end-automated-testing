import Counter from "./counter";

let counter;

beforeAll(() => {
    console.log('beforeAll');
})

beforeEach(() => {
    console.log('beforeEach');
    counter = new Counter();//每次都进行实例化 防止测试用例之间数据的耦合
})

afterAll(() => {
    console.log('afterAll');
})

afterEach(() => {
    console.log('afterEach');
})


describe('测试增加相关的代码', () => {
    test('测试 Counter 中的 addOne 方法', () => {
        console.log('测试 Counter 中的 addOne 方法');
        counter.addOne();
        expect(counter.number).toBe(1);
    })

    test('测试 Counter 中的 addTwo 方法', () => {
        console.log('测试 Counter 中的 addTwo 方法');
        counter.addTwo();
        expect(counter.number).toBe(2);
    })
})

describe('测试减少相关的代码', () => {
    test('测试 Counter 中的 minusOne 方法', () => {
        console.log('测试 Counter 中的 minusOne 方法')
        counter.minusOne();
        expect(counter.number).toBe(-1);
    })

    test('测试 Counter 中的 minusTwo 方法', () => {
        console.log('测试 Counter 中的 minusTwo 方法');
        counter.minusTwo();
        expect(counter.number).toBe(-2);
    })
})

