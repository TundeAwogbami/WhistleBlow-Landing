// I'll add other necessary JavaScript here later
// For example, functionality for adding products to cart, etc.

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

function searchProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        let productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        closeModal('loginModal');
    } else {
        alert("Invalid credentials!");
    }
}

function signup() {
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        alert(`Welcome, ${name}! Your account has been created.`);
        closeModal('signupModal');
    } else {
        alert("Please fill in all fields.");
    }
}

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let productCard = button.closest('.product-card');
        let productName = productCard.querySelector('h3').textContent;
        let productPrice = productCard.querySelector('.price').textContent;

        addToCart(productName, productPrice);
    });
});

function addToCart(productName, productPrice) {
    let product = {
        name: productName,
        price: productPrice
    };
    
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById('cartCount').textContent = cart.length;
    let cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Clear cart list
    
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Checkout successful!");
    cart = []; // Clear cart after checkout
    updateCart();
    closeModal('cartModal');
}

