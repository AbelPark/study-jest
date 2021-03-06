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
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ name: "Mike", age: 30, gender: "male" })
      }, 500)
    })
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res()
      }, 500)
    })
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ brand: "bmw", name: "z4", color: "red" })
      }, 500)
    })
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res()
      }, 500)
    })
  },
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다.")
    return {
      name,
    }
  },
}

module.exports = fn
