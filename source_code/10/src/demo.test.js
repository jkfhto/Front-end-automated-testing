jest.mock('./demo');//使用jest.mock 模拟 __mocks__ 文件夹下的demo.js文件里面的内容
// jest.unmock('./demo');//取消模拟

import { fetchData } from "./demo";//引入模拟的文件下的fetchData

const { getNumber } = jest.requireActual('./demo');//对于同步代码直接引入真实代码的模块

test('测试 fetchData', () => {
    return fetchData().then(data => {
        expect(data).toEqual('123')
    })
})

test('测试 getNumber', () => {
    expect(getNumber()).toEqual('123')
})