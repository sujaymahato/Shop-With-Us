function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000); 
updateTime(); 




const products = {
    Babyclothes: [
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
        { name: "Dress 1", price: "Rs 200", inStock: true, img: "../images-child/baby-clothes-banner.jpg" },
    ],
    Footwear: [
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
        { name: "Footwear 1", price: "Rs 200", inStock: true, img: "../images-child/baby-footwear-products.jpg" },
    ],
    Hats: [
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
        { name: "Hat 1", price: "Rs 200", inStock: true, img: "../images-child/baby-hats-products.jpg" },
    ],
    Babylotions: [
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
        { name: "Baby Lotion 1", price: "Rs 200", inStock: true, img: "../images-child/baby-lotion-products.jpg" },
    ],
    Toys: [
        { name: "Toy 1", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 2", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 3", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 4", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 5", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 6", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 7", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 8", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 9", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 10", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 11", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 12", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 13", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 14", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 15", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 16", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 17", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 18", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 19", price: "Rs 200", inStock: true, img: "../images-child/baby-toys-products.jpg" },
        { name: "Toy 20", price: "Rs 400", inStock: true, img: "../images-child/baby-toys-products.jpg" },
    ],
};



const bannerImages = {
    'Babyclothes': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images-child/baby-clothes-banner.jpg")',
    'Footwear': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images-child/baby-footwear-banner.jpg")',
    'Hats': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images-child/baby-hats-banner.jpg")',
    'Babylotions': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images-child/baby-lotion-products.jpg")',
    'Toys': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../images-child/baby-toys-banner.jpg")'
};


function showProducts(category) {
    const productCards = document.getElementById("productCards");
    productCards.innerHTML = ""; // Clear existing products

    if (bannerImages[category]) {
        banner.style.backgroundImage = bannerImages[category];
    }

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

        productCards.appendChild(card); // Append the card to the productCards element
    });

    // Re-attach event listeners to new shop-now buttons
    attachShopNowListeners();
}

// Function to attach event listeners to shop-now buttons
function attachShopNowListeners() {
    document.querySelectorAll('.shop-now').forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.currentTarget.getAttribute('data-name');
            basePrice = parseInt(e.currentTarget.getAttribute('data-price').replace("Rs ", "")); // Set base price from the selected product
            const productImg = e.currentTarget.getAttribute('data-img');

            // Update modal with product details
            document.getElementById('productImage').src = productImg;
            document.getElementById('quantity').value = 1; // Reset quantity
            document.getElementById('priceValue').textContent = basePrice; // Update price to base price
        });
    });
}

// Initial call to attach listeners
attachShopNowListeners();




showProducts('Babyclothes');


const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const category = e.currentTarget.getAttribute('data-filter');
        showProducts(category);
    });
});


showProducts('Babyclothes');





// Modal functionality
let basePrice; // Declare basePrice outside for scope

document.querySelectorAll('.shop-now').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.currentTarget.getAttribute('data-name');
        basePrice = parseInt(e.currentTarget.getAttribute('data-price').replace("Rs ", "")); // Set base price from the selected product
        const productImg = e.currentTarget.getAttribute('data-img');

        // Update modal with product details
        document.getElementById('productImage').src = productImg;
        document.getElementById('quantity').value = 1; // Reset quantity
        document.getElementById('priceValue').textContent = basePrice; // Update price to base price
    });
});



// Update total price based on quantity
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = basePrice * quantity; // Calculate total price based on selected product price
    document.getElementById('priceValue').textContent = totalPrice; // Update total price display
}

// Event listeners for increment and decrement buttons
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

// Event listener for the Place Order button
document.getElementById('place-order').addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    if (!address) {
        alert("Please enter your address.");
        return;
    }

    // Log the order details
    console.log(`Order placed: ${quantity} x ${size}, Total: Rs ${basePrice * quantity}, Address: ${address}`);

    // Close the modal
    $('#customModal').modal('hide');

    // Show the animation
    const animationContainer = document.getElementById('animationContainer');
    animationContainer.style.display = 'flex'; // Show the animation container

    // Optionally hide the animation after a few seconds (e.g., 5 seconds)
    setTimeout(() => {
        animationContainer.style.display = 'none'; // Hide animation after 5 seconds
    }, 4000);
});
