import { timerGame, infiniteTimerGame, timerGame2 } from './timerGame'

//重置定时器 各个测试用例之间的模拟定时器就不会互相影响
beforeEach(() => {
    jest.useFakeTimers();//通过jest.useFakeTimers();来模拟定时器函数
})


// test('waits 1 second before ending the game', () => {
//     timerGame(()=>{
//         console.log('异步结束')
//     });
//     console.log('setTimeout.mock', setTimeout.mock);
//     expect(setTimeout).toHaveBeenCalledTimes(1);//断言setTimeout执行一次
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);//断言1000毫秒后执行回调函数
// });


test('waits 1 second before ending the game', () => {
    const callback = jest.fn();//调用 jest.fn() 即可获得一个 mock 函数

    timerGame(callback);

    // 在这个时间点，定时器的回调不应该被执行
    expect(callback).not.toBeCalled();

    // “快进”时间使得所有定时器回调被执行
    jest.runAllTimers();

    // 现在回调函数应该被调用了！
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(2);
});


describe('infiniteTimerGame', () => {
    test('schedules a 10-second timer after 1 second', () => {
        const callback = jest.fn();

        infiniteTimerGame(callback);

        // At this point in time, there should have been a single call to
        // setTimeout to schedule the end of the game in 1 second.
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        //只执行当前已处于队列中即将被执行的timers，而不会运行没有被创建的timers
        jest.runOnlyPendingTimers();

        // At this point, our 1-second timer should have fired it's callback
        expect(callback).toBeCalled();

        // And it should have created a new timer to start the game over in
        // 10 seconds
        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    });
});


test('测试 timer', () => {
    const callback = jest.fn();//调用 jest.fn() 即可获得一个 mock 函数

    timerGame2(callback);

    // 在这个时间点，定时器的回调不应该被执行
    expect(callback).not.toBeCalled();

    // 让时间快进3000毫秒，第一个定时器被执行
    jest.advanceTimersByTime(3000);
    // 现在回调函数应该被调用了！
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);

    // 再让时间快进3000毫秒，第二个定时器被执行
    jest.advanceTimersByTime(3000);
    expect(callback).toHaveBeenCalledTimes(2);
});