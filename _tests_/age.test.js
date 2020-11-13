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
  test('Should correctly take user age,divide it by 0.24, and then round up to determine age on Mercury', () => {
      expect(age.mercuryTotal()).toEqual(121);
  });
  test('Should correctly take user age, divide it by 0.62, and then round up to determine age on Venus', () => {
      expect(age.venusTotal()).toEqual(47);
  });
  test('Should correctly take user age, divide it by 1.88, and then round up to determine age on Mars', () => {
    expect(age.marsTotal()).toEqual(15);
  });
  test('Should correctly take user age, divide it by 11.86, and then round the result to determine age on Jupiter', () => {
    expect(age.jupitersTotal()).toEqual(2);
  });
  test('Should correctly take life expectancy for earth and subtract user age', () => {
    expect(age.lifeExEarth()).toequal(46);
  })
});