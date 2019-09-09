import axios from 'axios';

export default {
    //回调函数
    fetchCallBack(callback) {
        return axios.get('http://www.dell-lee.com/react/api/demo.json')
            .then(res => callback(res.data))
    },

    //Promise
    fetchPromise() {
        return axios.get('http://www.dell-lee.com/react/api/demo.json')
            .then(res => res.data)
    },

    //Async
    fetchAsync() {
        return axios.get('http://www.dell-lee.com/react/api/demo.json')
            .then(res => res.data)
    }
}
