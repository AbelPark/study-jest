// 테스트 전 후 처리

const fn = require("./fn")

// 테스트가 진행될때마다 새롭게 할당되는 num값을 초기화 해줌 afterEach는 테스트 후에 처리 됨
// describe는 테스트 묶음 테스트별 dept나눠줌. 대분류 해주는 용도

describe("값 할당 관련 예시", () => {
  let num = 0
  beforeEach(() => {
    num = 0
  })

  test("0 + 1", () => {
    num = fn.add(num, 1)
    expect(num).toBe(1)
  })
  test("0 + 2", () => {
    num = fn.add(num, 2)
    expect(num).toBe(2)
  })
  test("0 + 3", () => {
    num = fn.add(num, 3)
    expect(num).toBe(3)
  })
})

describe("비동기 정보 받아오는 경우 처리", () => {
  let user
  beforeAll(async () => {
    user = await fn.connectUserDb()
  })
  afterAll(() => {
    return fn.disconnectDb()
  })

  test("이름은 Mike", () => {
    expect(user.name).toBe("Mike")
  })
  test("나이는 30", () => {
    expect(user.age).toBe(30)
  })
  test("성별은 남성", () => {
    expect(user.gender).toBe("male")
  })
})

describe("Car 관련 작업", () => {
  let car
  beforeAll(async () => {
    car = await fn.connectCarDb()
  })
  afterAll(() => {
    return fn.disconnectCarDb()
  })

  test("차량이름 z4", () => {
    expect(car.name).toBe("z4")
  })
  test("brand bmw", () => {
    expect(car.brand).toBe("bmw")
  })
  test("color red", () => {
    expect(car.color).toBe("red")
  })
})
