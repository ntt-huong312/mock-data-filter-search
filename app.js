var mockData = [
  {
    name: "SP1",
    price: 999,
    picture: "",
  },
];

var products = document.querySelector(".products");
mockData.forEach((item) => {
  var newProduct = document.createElement("div");
  newProduct.classList.add("product");
  newProduct.innerHTML = `
    <img src="img/viva-la-vida.jpg" alt="product" />
    <div class="info">
      <div class="name">${item.name}</div>
      <div class="price">${item.price}</div>
    </div>`;
  products.appendChild(newProduct);
});
