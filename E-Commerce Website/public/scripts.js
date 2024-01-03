document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.getElementById('products');
    const cartItems = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
  
    // Dummy product data
    const products = [
      { id: 1, name: 'Football ', price: 599.99 },
      { id: 2, name: 'Mobile', price: 59999.99 },
      { id: 3, name: 'Laptop', price: 399999.99 },
    ];
  
    // Render products
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
      `;
      productsSection.appendChild(productDiv);
    });
  
    // Cart functionality
    const cart = [];
  
    window.addToCart = (id, name, price) => {
      const item = { id, name, price };
      cart.push(item);
      updateCart();
    };
  
    const updateCart = () => {
      cartItems.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
      });
  
      totalSpan.textContent = total.toFixed(2);
    };
  
    checkoutBtn.addEventListener('click', () => {
      alert('Checkout functionality will be implemented in the backend.');
    });
  });
  