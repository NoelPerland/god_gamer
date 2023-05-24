class Confirm {
  constructor() {
    this.result = '';
  }

  getResult() {
    return this.result;
  }

  give(tuna = 'Tuna') {
    this.result = `${tuna} is a fish`;
    return this.result;
  }
}

module.exports = Confirm;
