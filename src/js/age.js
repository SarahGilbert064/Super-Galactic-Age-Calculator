const mercuryYear = 0.24;
const venusYear = 0.62;



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
};  