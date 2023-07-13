document.addEventListener("DOMContentLoaded", () => {
  // Retrieve stored product data from localStorage
  let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  // Update product details on the page
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="product-img"><img src="${selectedProduct.image}" alt=""></div>
    <div class="product-detail">
      <div class="product-name">${selectedProduct.title}</div>
      <div class="product-description">${selectedProduct.description
      }</div>
      <div class="product-price">Price : ${selectedProduct.price}$</div>
      <div class="buyNow-btn"><button id="add-btn-${selectedProduct.id}">Buy Now</button></div>
    </div>
    `;
  document.querySelector(".product-details").appendChild(card);
});
