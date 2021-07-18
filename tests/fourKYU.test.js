const fourKYU = require("../kata/4kyu/fourKYU");

const { removeZeros } = fourKYU;

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
