import axios from 'axios';
import { runCallBack, createInstance, getData} from "./demo";

jest.mock('axios');

test('测试 runCallBack', () => {
    const fn = jest.fn();//Mock 函数，可以捕获函数的调用情况和返回结果，函数的执行顺序 捕获函数每次执行的this指向
    runCallBack(fn);
    // expect(fn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(fn.mock.calls.length).toBe(1);
    console.log(fn.mock)
})


test('测试jest.fn()调用', () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);

    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
})


test('测试jest.fn()返回固定值', () => {
    let mockFn = jest.fn().mockReturnValue('default');//Mock 函数，可以自由设置函数返回值
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe('default');
})

test.only('测试jest.fn()改变函数的内部实现', () => {
    let mockFn = jest.fn((num1, num2) => {//Mock 函数，改变函数的内部实现
        return num1 * num2;
    })
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100);
})

test('测试jest.fn()返回Promise', async () => {
    let mockFn = jest.fn().mockResolvedValue('default');
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe('default');
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
})

test.only('测试 getData', async ()=>{
    axios.get.mockResolvedValue({ data: 'hello'});
    const data = await getData();
    expect(data).toBe('hello')
})