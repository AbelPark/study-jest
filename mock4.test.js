const mockFn = jest.fn()

// mockReturnValueOnce 리턴 값을 흉내냄(반환)

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true)

const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num))

test("홀수는 1,3,5", () => {
  expect(result).toStrictEqual([1, 3, 5])
})
