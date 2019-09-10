import addDivToBody from "./demo";
import $ from "jquery";

//node 环境下没有dom对象
//Jest 在node环境下模拟了一套dom的api。jsDom
test('测试 addDivToBody',()=>{
    addDivToBody();
    addDivToBody();
    expect($('body').find('div').length).toBe(2);
})