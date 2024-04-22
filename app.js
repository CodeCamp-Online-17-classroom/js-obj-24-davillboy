// write code here
class Sale {
  constructor(name) {
    this.name = name;
  }

  calcPrice(amount, price, discount) {
    let total = amount * price;
    let discountedPrice = total - (total * discount);
    return discountedPrice;
  }
}

class Beverage extends Sale {
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

// สร้าง object beverage จาก Beverage
let beverage = new Beverage('Pepsi', 3, 19, 0.1);

// ให้ beverage เรียก method calcPrice() และแสดงผล
let totalPrice = beverage.calcPrice(beverage.amount, beverage.price, beverage.discount);
console.log('Total Price after discount:', totalPrice);
