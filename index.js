const btnOpen = document.getElementById('btn-open-cart');
const btnClose = document.getElementById('btn-close-cart');
const sidebar = document.getElementById('sidebar-menu');

const cartContainer = document.getElementById('cart-items-container');
const badge = document.getElementById('cart-badge');
const buttonsAdd = document.querySelectorAll('.btn-add-cart');
let cartCount = 0;

btnOpen.addEventListener('click', () => {
    sidebar.classList.add('cart--open');
});

btnClose.addEventListener('click', () => {
    sidebar.classList.remove('cart--open');
});

buttonsAdd.forEach((button) => {
    button.addEventListener('click', (e) => {
        const productArticle = e.target.closest('article');

        const title = productArticle.querySelector('.products__model').innerText;
        const price = productArticle.querySelector('.products__price').innerText;
        const imgSrc = productArticle.querySelector('.products__img').src;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart__box');
        cartItem.innerHTML = `
            <img class="cart__img" src="${imgSrc}" alt="${title}">
            <div class="cart__info">
                <p>${title}</p>
                <p class="cart__price--highlight">${price}</p>
            </div>
            <i class="cart__box_i btn-delete-item">
                <img src="img/delete_icon.png" alt="Eliminar" class="cart__delete_icon">
            </i>
        `;

        cartContainer.appendChild(cartItem);
        cartCount++;
        badge.innerText = cartCount;
    });
});

cartContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__delete_icon') || e.target.closest('.btn-delete-item')) {
        const itemToRemove = e.target.closest('.cart__box');
        itemToRemove.remove();

        if (cartCount > 0) {
            cartCount--;
            badge.innerText = cartCount;
        }
    }
});