const fourKYU = require("../kata/4kyu/fourKYU");

const { removeZeros, snail, topThreeWords } = fourKYU;

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

test("Should return top three most occuring words in decending order and single characters work", () => {
  expect(
    topThreeWords("a a a b c c d d d d e e e e e e e e e e e e e ")
  ).toStrictEqual(["e", "d", "a"]);
});

test("Should not be case sensitive and returned values should be lowercased", () => {
  expect(topThreeWords("aAAA aaaa aAaA dd ccc ccC cCc ccc")).toStrictEqual([
    "ccc",
    "aaa",
    "dd",
  ]);
});

test("Should return empty array if no words are present", () => {
  expect(topThreeWords("///")).toStrictEqual([]);
});

test("Should return all strings if less than 3 unique strings are present", () => {
  expect(topThreeWords("aAAA aaaa ccc")).toStrictEqual(["ccc", "aaa"]);
});

test("Should ignore special characters apart from apostrophies", () => {
  expect(topThreeWords("aAA'A aaa'a dd ccC //ccc ccc *****qQ Dd")).toStrictEqual(["ccc", "aaa'a", 'dd']);
});
