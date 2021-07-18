const sixKYU = require("../kata/6kyu/sixKYU");

const { duplicateCount } = sixKYU;

test("returns a number", () => {
  expect(typeof duplicateCount("")).toBe("number");
});

test("should return total amount of duplicate letters", () => {
  expect(duplicateCount("aabbcc")).toBe(3);
});

test("should ignore cases", () => {
  expect(duplicateCount("aAbBcC")).toBe(3);
});

test("should also work when letters are not adjacent", () => {
  expect(duplicateCount("Christianity")).toBe(2);
});
