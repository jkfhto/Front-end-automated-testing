import Counter from "./counter";

describe('Counter 的测试代码',()=>{
    let counter;
    //最先输出describe描述文本 后面才会执行钩子函数 执行测试用例
    console.log('describe 1')
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
        console.log('describe 2')
        beforeEach(() => {
            console.log('beforeEach 测试增加相关的代码');
        })

        test.only('测试 Counter 中的 addOne 方法', () => {
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
        console.log('describe 3')
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
})



