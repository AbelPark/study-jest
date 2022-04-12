const fn = require("./fn")

// jest로 fn을 모킹 모듈로 만듬
// mock을 사용하지 않으면 fn의 createUser 함수를 실제로 불러와 console이 찍히게됨
jest.mock("./fn")

fn.createUser.mockReturnValue({ name: "Mike" })

test("유저 생성", () => {
  const user = fn.createUser("Mike")
  expect(user.name).toBe("Mike")
})
