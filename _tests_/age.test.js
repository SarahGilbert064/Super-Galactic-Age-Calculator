import { TestScheduler } from "jest";
import Age from "./../src/js/age.js";

describe('Age', () => {
  let age;
  let oldAge;
  beforeEach(() => {
    age = new Age(29);
    oldAge = new Age (80);
  });
  test('Should correctly create an age object with current age', () => {
      expect(age.currentAge).toEqual(29);
  });
  test('Should correctly take user age,divide it by 0.24, and then round up to determine age on Mercury', () => {
      expect(age.mercuryTotal()).toEqual("On Mercury, you are 121 years old!");
  });
  test('Should correctly take user age, divide it by 0.62, and then round up to determine age on Venus', () => {
      expect(age.venusTotal()).toEqual("On Venus, you are 47 years old!");
  });
  test('Should correctly take user age, divide it by 1.88, and then round up to determine age on Mars', () => {
    expect(age.marsTotal()).toEqual(15);
  });
  test('Should correctly take user age, divide it by 11.86, and then round the result to determine age on Jupiter', () => {
    expect(age.jupitersTotal()).toEqual(2);
  });
  test('Should correctly take life expectancy for earth and subtract user age', () => {
    expect(age.lifeExpEarth()).toEqual(46);
  });
  test('Should correctly divide current life expectancy on earth by mercuryYear, then subtract that by user current age on Mercury', () => {
    expect(age.lifeExpMercury()).toEqual(192);
  });
  test('Should correctly divide current life expectancy on earth by venusYear, then subtract that by user current age on Venus', () => {
    expect(age.lifeExpVenus()).toEqual(74);
  });
  test('Should correctly divide current life expectancy on earth by a year on Mars, then subtract that by users current age on Mars', () => {
    expect(age.lifeExpMars()).toEqual(24);
  });
  test('Should correctly divide current life expectancy on earth by a year on Jupiter, then subtract that by users current age on Jupiter', () => {
    expect(age.lifeExpJupiter()).toEqual(4);
  });
  test('Should correctly take users age and determine the amount of years they have lived pasted the life expectancy rate', () => {
    expect(oldAge.extraYears()).toEqual(5);
  });
});