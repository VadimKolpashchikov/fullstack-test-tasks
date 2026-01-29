class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  set amount(value) {
    if (typeof value !== 'number' && !Number.isFinite(value) && value <= 0) {
      throw new Error('incorrect "amount" parameter format');
    }

    this._amount = value;
  }

  calculateTotal() {
    return this._amount;
  }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  set hours(value) {
    if (typeof value !== 'number' && !Number.isFinite(value) && value <= 0) {
      throw new Error('incorrect "amount" parameter format');
    }

    this._hours = value;
  }

  calculateTotal() {
    return this._amount * this._hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }

  set items(value) {
    if (!Array.isArray(value) && !value.length) {
      throw new Error('incorrect "items" parameter format');
    }

    this._items = value;
  }

  calculateTotal() {
    return this._amount * this._items.length;
  }
}

const fixBilling = new FixBilling(1000);
const hourBilling = new HourBilling(1000, 10);
const itemBilling = new ItemBilling(1000, [{ name: '1' }, { name: '2' }]);

console.log(fixBilling.calculateTotal());
console.log(hourBilling.calculateTotal());
console.log(itemBilling.calculateTotal());
