const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, zender: undefined }),
  throwErr: () => {
    throw new Error("XX")
  },
  getName: (callback) => {
    const name = "형민"
    setTimeout(() => {
      callback(name)
    }, 2000)
  },
  getAge: (age) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        age === 30 ? res(age) : rej("error")
      }, 2000)
    })
  },
  getAwait: async () => {
    const rr = 10
    setTimeout(() => {
      return rr
    }, 2000)
  },
}

module.exports = fn
