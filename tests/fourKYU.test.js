const fourKYU = require("../kata/4kyu/fourKYU");

const { removeZeros, snail } = fourKYU;

test("zeroes are moved in correct position retaining their type", () => {
  expect(
    removeZeros([7, 2, 3, 0, 4, 6, 0, 6, 0, 13, 0, 78, "0", 19, 14])
  ).toStrictEqual([7, 2, 3, 4, 6, 6, 13, 78, 19, 14, 0, 0, 0, 0, "0"]);
});

test("works when zeros are adjacent", () => {
  expect(
    removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])
  ).toStrictEqual([7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]);
});

test("should work with an empty 2 dimensional array", () => {
  expect(snail([[]])).toStrictEqual([]);
});

test("should work when the input contains a single child with one element", () => {
  expect(snail([[1]])).toStrictEqual([1]);
});

test("returns a 2 dimensional array in order in a snail pattern", () => {
  expect(
    snail([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ])
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("returns a 2 dimensional array in order in a snail pattern", () => {
  expect(
    snail([
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11],
    ])
  ).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ]);
});

