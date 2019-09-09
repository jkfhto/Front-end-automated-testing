import fetchData from './fetchData';

/**
 * 基于回调函数的异步测试
 */
// test('基于回调函数的异步测试：fetchData 返回结果 {success:true}', (done) => {
//     function callback(data) {
//         expect(data).toEqual({success:true});
//         done();
//     }

//     fetchData.fetchCallBack(callback);
// })

/**
 * 基于Promise的异步测试
 */
test('基于Promise的异步测试：fetchData 返回结果 {success:true}', () => {
    return fetchData.fetchPromise()
        .then(data => {
            expect(data).toEqual({success:true});
        });
    // return expect(fetchData.fetchPromise()).resolves.toEqual({ success: true });
})

//404
test('基于Promise的异步测试：fetchData 返回结果 404', () => {
    return expect(fetchData.fetchPromise()).rejects.toThrow();
})


/**
 * 基于Async/Await的异步测试
 */
test('基于Async/Await的异步测试：fetchData 返回结果 {success:true}', async () => {
    const data = await fetchData.fetchAsync();
    expect(data).toEqual({ success: true });
})

//404
test('基于Async/Await的异步测试：fetchData 返回结果 404', async () => {
    expect.assertions(1);
    try {
        await fetchData.fetchAsync();
    } catch (e) {
        expect(e).toMatch('error');
    }
})