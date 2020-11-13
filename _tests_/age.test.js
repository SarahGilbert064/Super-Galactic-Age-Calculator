import { TestScheduler } from "jest";
import Age from "./src/js/gunner.js";

describe('Age', () => {
  let age;
  beforeEach(() => {
    age = new Age(currentAge);
  });
  test('Should correctly create an age object with current age', () => {
    expect(age.currentAge).toEqual(29);
  });
  
});