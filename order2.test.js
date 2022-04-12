const fn = require("./fn")

let num = 0

// test.only 다른 테스트 패스하고 only 있는것만
// test.skip 이 테스트 건너 뛰고 실행

test("0 + 1", () => {
  expect(fn.add(num, 1)).toBe(1)
})
test("0 + 2", () => {
  expect(fn.add(num, 2)).toBe(2)
})
test.skip("0 + 3", () => {
  expect(fn.add(num, 3)).toBe(3)
  num = 10
})
test("0 + 4", () => {
  expect(fn.add(num, 4)).toBe(4)
})
