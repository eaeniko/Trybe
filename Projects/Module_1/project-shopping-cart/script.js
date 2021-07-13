const baseURL = 'https://api.mercadolibre.com/';
const olCart = document.querySelector('.cart__items');
const totalPrices = document.querySelector('.total-price');
const emptyCartBtn = document.querySelector('.empty-cart');

function loadingTextApi() {
  const p = document.createElement('p');
  p.className = 'loading';
  p.innerText = 'loading...';
  document.querySelector('body').prepend(p);
}
function removeLoading() {
  document.querySelector('.loading').remove();
}

async function requestAPI(query) {
  loadingTextApi();
  const response = await fetch(`${baseURL}${query}`);
  const product = await response.json();
  removeLoading();
  return product;
}

function calculateTotalPrices() {
  const listOfItems = document.querySelectorAll('.cart__item');
  let totalItemsPrice = 0;
  listOfItems.forEach((item) => {
    const splitItem = item.innerText.split('$')[1];
    totalItemsPrice += Number(splitItem);
    totalItemsPrice.toFixed(2);
  });
  totalPrices.innerText = totalItemsPrice;
}

function setLocalStorageItem() {
  const cart = document.querySelector('.cart__items');
  localStorage.setItem('productCart', cart.innerHTML);
  calculateTotalPrices();
 }
 
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  const eventTarget = event.target;
  eventTarget.remove();
  setLocalStorageItem();
  // calculateTotalPrices();
}

function getLocalStorageItems() {
  olCart.innerHTML = localStorage.getItem('productCart');
  const li = document.querySelectorAll('.cart__item');
  li.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
  calculateTotalPrices();
 }

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function eventButtonsProducts(item) {
  const idItem = getSkuFromProductItem(item.target.parentNode);
  const idProduct = await requestAPI(`items/${idItem}`);
  const li = createCartItemElement(idProduct);
  olCart.appendChild(li);
  setLocalStorageItem();
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', eventButtonsProducts);

  return section;
}

function addProducts(product) {
  const sectionProduct = document.querySelector('.items');
  product.results.forEach((result) => {
    const item = createProductItemElement(result);
    sectionProduct.appendChild(item);
  });
}

function removeAllProductsCart() {
  const emptyCart = () => {
    olCart.innerHTML = '';
    // calculateTotalPrices();
    setLocalStorageItem();
  };
  emptyCartBtn.addEventListener('click', emptyCart);
}

window.onload = async () => { 
  const products = await requestAPI('sites/MLB/search?q=computador');
  addProducts(products);
  getLocalStorageItems();
  removeAllProductsCart();
};
