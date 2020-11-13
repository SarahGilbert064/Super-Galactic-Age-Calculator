const mercuryYear = 0.24;
const venusYear = 0.62;
const marsYear = 1.88;
const jupiterYear = 11.86;
const lifeExp = 75;



export default class Age {
  constructor(currentAge) {
    this.currentAge = currentAge;
  }

  mercuryTotal() {
    return Math.round(this.currentAge/mercuryYear);
  }

  venusTotal() {
    return Math.round(this.currentAge/venusYear);
  }

  marsTotal() {
    return Math.round(this.currentAge/marsYear);
  }

  jupitersTotal() {
    return Math.round(this.currentAge/jupiterYear);
  }

  lifeExEarth () {
    return Math.round(lifeExp - this.currentAge);
  }

};  