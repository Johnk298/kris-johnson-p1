var price = 100,
  LaborDiscount = 0.5,
  LaborPrice = price - price * LaborDiscount,
  priceEl = document.getElementById("price"),
  LaborPriceEl = document.getElementById("Labor-price");

priceEl.textContent = price.toFixed(2);
LaborPriceEl.textContent = LaborPrice.toFixed(2);
