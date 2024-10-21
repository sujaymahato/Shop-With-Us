function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000); 
updateTime(); 




const products = {
    accessories: [
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
        { name: "Accessories", price: "Rs 500", inStock: true, img: "./images-products/accessories.jpg" },
    ],



  
};


function showProducts(category) {
    const productCards = document.getElementById("productCards");
    productCards.innerHTML = ""; 

    products[category].forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="card-img-top">
            <div class="card-body">
                <h4 class="card-title">${product.name}</h4>
                <p class="card-text">Price: ${product.price}</p>
                <p class="stock-info">In Stock: ${product.inStock ? "Yes" : "No"}</p>
                <button class="shop-now" data-bs-toggle="modal" data-bs-target="#customModal" data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">Shop Now</button>
            </div>
            <a href="#" class="cart-icon">
                <i class="fas fa-shopping-cart"></i>
                <span class="cart-tooltip">Add to Cart</span>
            </a>
        `;

        productCards.appendChild(card); 
    });
}

showProducts('accessories');

const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const category = e.currentTarget.getAttribute('data-filter');
        showProducts(category);
    });
});

// Modal functionality
let basePrice; 

document.querySelectorAll('.shop-now').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.currentTarget.getAttribute('data-name');
        basePrice = parseInt(e.currentTarget.getAttribute('data-price').replace("Rs ", "")); 
        const productImg = e.currentTarget.getAttribute('data-img');

      
        document.getElementById('productImage').src = productImg;
        document.getElementById('quantity').value = 1; 
        document.getElementById('priceValue').textContent = basePrice; 
    });
});


function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = basePrice * quantity; 
    document.getElementById('priceValue').textContent = totalPrice; 
}


document.getElementById('increment').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
});

document.getElementById('decrement').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotalPrice();
    }
});


document.getElementById('place-order').addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    if (!address) {
        alert("Please enter your address.");
        return;
    }

    console.log(`Order placed: ${quantity} x ${size}, Total: Rs ${basePrice * quantity}, Address: ${address}`);

    $('#customModal').modal('hide');

    const animationContainer = document.getElementById('animationContainer');
    animationContainer.style.display = 'flex'; 


    setTimeout(() => {
        animationContainer.style.display = 'none'; 
    }, 4000);
});
