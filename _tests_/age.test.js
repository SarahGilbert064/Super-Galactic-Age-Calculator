import { TestScheduler } from "jest";
import Age from "./../src/js/age.js";

describe('Age', () => {
  let age;
  beforeEach(() => {
    age = new Age(29);
  });
  test('Should correctly create an age object with current age', () => {
      expect(age.currentAge).toEqual(29);
  });
    test('Should correctly take user age and divide it by 0.24 to determine age on Mercury', () => {
      expect(age.mercuryTotal).toEual(121);
  });
});