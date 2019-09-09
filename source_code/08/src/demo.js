import axios from 'axios';

//捕获函数调用情况
export const runCallBack = (callback) => {
    callback();
}

//实例化一个类
export const createInstance = (classItem) => {
    new classItem();
}

export const getData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
}