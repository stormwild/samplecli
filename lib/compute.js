// const Dinero = require('dinero.js');
// Dinero.defaultCurrency = 'EUR';
// Dinero.defaultPrecision = 2;

// var money = require("money-math");


class Compute {
  constructor(data) {
    if (!data) {
      throw new Error('Data not provided');
    }
    this.data = JSON.parse(data);
  }

  computeCommission(data) {
    let commissions = data.map(t => {
      let commission = 0.0;
      if (t.type === 'cash_in') {
        commission = t.operation.amount * 0.0003;
        return commission > 5 ? 5 : commission;
      }

      if (t.type === 'cash_out') {
        if (t.user_type === 'natural') {
          if (t.operation.amount > 1000) {
            commission = (t.operation.amount - 1000) * 0.003;
            return commission;
          }

          if(t.operation.amount <= 1000) {
            return commission;
          }
        }

        if (t.user_type === 'juridical') {
          commission = t.operation.amount * 0.003;
          return commission < 0.50 ? 0.50 : commission;
        }
      }
    });
    return commissions;
  }

  displayCommission() {
    let commissions = this.computeCommission(this.data);
    commissions.forEach(c => console.log(c));
  }
}

module.exports = Compute;
