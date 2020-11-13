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

  lifeExpEarth () {
    return Math.round(lifeExp - this.currentAge);
  }

  lifeExpMercury() {
    return Math.round((lifeExp/mercuryYear) - this.currentAge/mercuryYear);
  }

  lifeExpVenus() {
    return Math.round((lifeExp/venusYear) - this.currentAge/venusYear);
  }

  lifeExpMars() {
    return Math.round((lifeExp/marsYear) - this.currentAge/marsYear);
  }

  lifeExpJupiter() {
    return Math.round((lifeExp/jupiterYear) - this.currentAge/jupiterYear);
  }

  extraYears() {
    return Math.abs(this.currentAge - lifeExp);
  }
};  