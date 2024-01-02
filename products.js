class Product {
    constructor(product, unitCost, markup, promotion) {
      this.product = product;
      this.unitCost = unitCost;
      this.markup = markup;
      this.promotion = promotion;
    }
  }
  const productOptions = [
    new Product("A",0.52, 0.8, 'none'),
    new Product("B", 0.38, 1.2, '30% off'),
    new Product("C", 0.41, 0.9, '0.9 EUR/unit'),
    new Product("D", 0.6, 1, '20% off'),
  ];
  