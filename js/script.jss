var price = 100,
  LaborDiscount = 0.5,
  LaborPrice = price - price * LaborDiscount,
  priceEl = document.getElementById("price"),
  LaborPriceEl = document.getElementById("Labor-price");

(StudentDiscount = 0.8),
  (StudentPrice = price - price * StudentDiscount),
  (priceEl = document.getElementById("price")),
  (StudentPriceEl = document.getElementById("Student-price"));

priceEl.textContent = price.toFixed(2);
LaborPriceEl.textContent = LaborPrice.toFixed(2);
StudentPriceEl.textContent = StudentPrice.toFixed(2);
