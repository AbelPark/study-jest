// 참조 https://jestjs.io/docs/en/expect
// 기본 matcher 함수 사용법

const fn = require("./fn")

// matcher

test("1은 1이야.", () => {
  expect(1).toBe(1)
})

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5)
})

// not.toBe
test("3더하기 3은 5야", () => {
  expect(fn.add(3, 3)).not.toBe(5)
})

// 객체 비교
test("이름 나이 전달 받아 객체생성", () => {
  expect(fn.makeUser("마이크", 15)).toBe({ name: "마이크", age: 15 })
})

// 객체나 배열은 재귀적으로 돌면서 값을 확인해야 하기 때문에 toEqual 사용
test("이름 나이 전달 받아 객체생성", () => {
  expect(fn.makeUser("마이크", 15)).toEqual({ name: "마이크", age: 15 })
})

// 엄격한 테스트 toStrictEqual undefinded가 포함된 경우도 체크해줌
test("이름 나이 전달 받아 객체생성", () => {
  expect(fn.makeUser("마이크", 15)).toStrictEqual({ name: "마이크", age: 15 })
})

// toBeNull
test("null is null", () => {
  expect(null).toBeNull()
})

// toBeUndefined
// toBeDefined

// toBeFalsy
test("0 is false", () => {
  expect(fn.add(1, -1)).toBeFalsy()
})

// toBeTruthy
test("비어있지 않은 문자열은 true 입니다", () => {
  expect(fn.add("hello", "world")).toBeTruthy()
})

// toBeGreaterThan 크다
// toBeGreaterThenOrEqual 크가나 같다
// toBeLessThan 적다
// toBeLessThanOrEqual 작거나 같다

test("ID는 10자리 이하여야 한다.", () => {
  const id = "THE_BLACK"
  expect(id.length).toBeLessThanOrEqual(10)
})

// toBeCloseTo 소수점은 근사치로 (js는 소수점 덧셈뺄셈을 못함. 이진법이기 때문)
test("0.1 더하기 0.2는 0.3입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3)
})

// toMatch 정규식 검증 (i는 대소문자 구분없앰)
test("hello world에 글자 a가 있는가?", () => {
  expect("hello world").toMatch(/H/i)
})

// toContain 배열에 있는지 확인
test("유저 리스트에 Mike가 있나", () => {
  const user = "Mike"
  const userList = ["Mike", "Tyson", "Jordan"]
  expect(userList).toContain(user)
})

// toThrow 특정 작업을 했을때 어떤 에러가 나는지 확인할 수 있음
test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("XX")
})
