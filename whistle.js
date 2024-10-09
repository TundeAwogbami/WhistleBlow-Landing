// Add any necessary JavaScript here
// For example, functionality for adding products to cart, etc.

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
