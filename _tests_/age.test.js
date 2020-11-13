import { TestScheduler } from "jest";
import Age from "./../src/js/age.js";

describe('Age', () => {
  let age;
  beforeEach(() => {
    age = new Age(29);
  });
  test('Should correctly create an age object with current age', () => {
    expect(age.currentAge).toEqal(29);
  });
  
});