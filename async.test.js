// 비동기 함수 테스트

const fn = require("./fn")

// callback 형식
test("3초 후 이름", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("형민")
      done()
    } catch (error) {
      done(error)
    }
  }
  fn.getName(callback)
})

// promise 형식 matcher(resolves, rejects)
// resloves
test("promise", () => {
  // return fn.getAge().then((age) => {
  //   expect(age).toBe(30)
  // })
  return expect(fn.getAge(30)).resolves.toBe(30)
})
// rejects
test("promise", () => {
  return expect(fn.getAge(31)).rejects.toMatch("error")
})

// async await
test("async ", async () => {
  return await expect(fn.getAge(30)).resolves.toBe(30)
})
