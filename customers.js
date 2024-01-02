class Customer {
  constructor(id, basic, above10000, above30000) {
    this.customerId = id;
    this.basic = basic;
    this.above10000 = above10000;
    this.above30000 = above30000;
  }
}

const customers = [
  new Customer(1, 5, 0, 2),
  new Customer(2, 4, 1, 2),
  new Customer(3, 3, 1, 3),
  new Customer(4, 2, 3, 5),
  new Customer(5, 0, 5, 7),
];
