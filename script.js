let products = [];
let cartItems = [];

async function getData(){
  let res = await fetch('https://fakestoreapi.com/products')
  let data = await res.json()
  products = data;
  // console.log(products)  

  data.map((item)=>{
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="product-img"><img src="${item.image}" alt=""></div>
      <div class="product-name">${item.title}</div>
      <div class="product-price">Price : ${item.price}$</div>
      <div class="add-to-cart-btn"><button id="add-btn-${item.id}">Add to Cart</button></div>
    `
    document.querySelector("main").appendChild(card)
    document.querySelector(`#add-btn-${item.id}`).addEventListener("click", ()=>{
      let cri = products.find((it)=>{
        return it.id == item.id
      })
      cartItems.push(cri);
      cartItems = [...new Set(cartItems)]
      console.log(cartItems)
      document.querySelector("#count").innerText = cartItems.length;
    })
  })

}

function openCartModal(){
  // console.log(cartItems)
  const cards = document.querySelectorAll('.cart-card');

  cards.forEach(card => {
    card.remove();
  });
  
  cartItems.map((item)=>{
    let card = document.createElement("div");
    card.classList.add("cart-card");
    card.innerHTML = `
    <div class="product-img"><img src="${item.image}" alt=""></div>
      <div class="product-name">${item.title}</div>
      <div class="product-price">Price : ${item.price}$</div>
      <div class="add-to-cart-btn"><button id="view-btn-${item.id}">View Details</button></div>
    `
    document.querySelector(".modal-content").appendChild(card);
    document.querySelector(".cart-modal").style.display = "block"

    document.querySelector(`#view-btn-${item.id}`).addEventListener("click", ()=>{
      let selectedProduct = products.find((product) => product.id == item.id);
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
      window.location.href = 'product.html';
    })
  })
}

function closeModal(){
  document.querySelector(".cart-modal").style.display = "none"
}

getData()

