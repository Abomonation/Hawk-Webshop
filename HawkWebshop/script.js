document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products-container');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Sample products data
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        { id: 3, name: 'Product 3', price: 20 }
    ];

    // Function to render products
    function renderProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="product${product.id}.jpg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }

    // Function to add product to cart
    function addToCart(id, name, price) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${name} - $${price}`;
        cartItems.appendChild(cartItem);
        total += price;
        cartTotal.textContent = total;
    }

    // Initialize
    renderProducts();
});