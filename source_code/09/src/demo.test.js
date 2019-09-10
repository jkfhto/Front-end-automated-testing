import { generateConfig, generateAnotherConfig } from "./demo";

// test('测试 generateConfig 函数', () => {
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date),
//     });//第一次运行时 generateConfig()函数的结果生成快照保存 后面再次运行时生成新的快照与第一次生成的快照进行对比
// })

// test('测试 generateAnotherConfig 函数', () => {
//     expect(generateAnotherConfig()).toMatchSnapshot({
//         time: expect.any(Date),
//     });//第一次运行时 会把generateAnotherConfig()函数的结果生成快照保存 后面再次运行时生成新的快照与第一次生成的快照进行对比
// })

//Inline Snapshots

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  ); //第一次运行时 generateConfig()函数的结果生成快照保存 后面再次运行时生成新的快照与第一次生成的快照进行对比
});

test("测试 generateAnotherConfig 函数", () => {
  expect(generateAnotherConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  ); //第一次运行时 会把generateAnotherConfig()函数的结果生成快照保存 后面再次运行时生成新的快照与第一次生成的快照进行对比
});

test("will check the matchers and pass", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James"
  };

  expect(user).toMatchInlineSnapshot(
    {
      createdAt: expect.any(Date),
      id: expect.any(Number)
    },
    `
    Object {
      "createdAt": Any<Date>,
      "id": Any<Number>,
      "name": "LeBron James",
    }
  `
  );
});
