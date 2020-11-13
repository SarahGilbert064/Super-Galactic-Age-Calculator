const mercuryYear = 0.24;



export default class Age {
  constructor(currentAge) {
    this.currentAge = currentAge;
  }

  mercuryTotal() {
    return Math.round(this.currentAge/mercuryYear);
  }
};  