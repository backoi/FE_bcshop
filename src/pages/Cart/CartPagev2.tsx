
    <style>
        /* Custom animations */
        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); }
            to { transform: translateX(100%); }
        }
        
        .cart-slide-in {
            animation: slideIn 0.3s forwards;
        }
        
        .cart-slide-out {
            animation: slideOut 0.3s forwards;
        }
        
        /* Custom scrollbar */
        .cart-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        
        .cart-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        
        .cart-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        
        .cart-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        
        /* Anime-themed pulse for empty cart */
        @keyframes animePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .anime-pulse {
            animation: animePulse 2s infinite;
        }
        
        /* Custom checkbox */
        .checkbox-container {
            display: block;
            position: relative;
            padding-left: 30px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        .checkbox-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;
            border-radius: 4px;
        }
        
        .checkbox-container:hover input ~ .checkmark {
            background-color: #ccc;
        }
        
        .checkbox-container input:checked ~ .checkmark {
            background-color: #f472b6;
        }
        
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        
        .checkbox-container input:checked ~ .checkmark:after {
            display: block;
        }
        
        .checkbox-container .checkmark:after {
            left: 7px;
            top: 3px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    </style>
</head>
<body class="bg-gray-100 font-sans">
    <!-- Main page content -->
    <div class="container mx-auto p-4">
        <header class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-pink-600">AniFig Shop</h1>
            <button id="cart-toggle" class="relative">
                <i class="fas fa-shopping-cart text-2xl text-pink-600"></i>
                <span id="cart-count" class="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
        </header>
        
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* <!-- Sample product cards --> */}
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://i.imgur.com/JzFQZbA.jpg" alt="Naruto Figure" class="w-full h-48 object-cover">
                    <span class="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">NEW</span>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">Naruto Uzumaki</h3>
                    <p class="text-gray-600 text-sm mb-2">Shippuden Ver.</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-pink-600">$49.99</span>
                        <button class="add-to-cart bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm transition-colors" 
                                data-id="1" 
                                data-name="Naruto Uzumaki" 
                                data-price="49.99" 
                                data-image="https://i.imgur.com/JzFQZbA.jpg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://i.imgur.com/8zJQvZ9.jpg" alt="Sasuke Figure" class="w-full h-48 object-cover">
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">Sasuke Uchiha</h3>
                    <p class="text-gray-600 text-sm mb-2">Shippuden Ver.</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-pink-600">$54.99</span>
                        <button class="add-to-cart bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm transition-colors" 
                                data-id="2" 
                                data-name="Sasuke Uchiha" 
                                data-price="54.99" 
                                data-image="https://i.imgur.com/8zJQvZ9.jpg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://i.imgur.com/vY9FQZb.jpg" alt="Goku Figure" class="w-full h-48 object-cover">
                    <span class="absolute top-2 right-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">LIMITED</span>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">Goku</h3>
                    <p class="text-gray-600 text-sm mb-2">Super Saiyan Blue</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-pink-600">$69.99</span>
                        <button class="add-to-cart bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm transition-colors" 
                                data-id="3" 
                                data-name="Goku" 
                                data-price="69.99" 
                                data-image="https://i.imgur.com/vY9FQZb.jpg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://i.imgur.com/JzFQZbA.jpg" alt="Luffy Figure" class="w-full h-48 object-cover">
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1">Monkey D. Luffy</h3>
                    <p class="text-gray-600 text-sm mb-2">Gear 5 Ver.</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-pink-600">$59.99</span>
                        <button class="add-to-cart bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm transition-colors" 
                                data-id="4" 
                                data-name="Monkey D. Luffy" 
                                data-price="59.99" 
                                data-image="https://i.imgur.com/JzFQZbA.jpg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Shopping Cart Sidebar -->
    <div id="cart-sidebar" class="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform translate-x-full">
        <div class="flex flex-col h-full">
            <!-- Cart Header -->
            <div class="flex justify-between items-center p-4 border-b">
                <h2 class="text-xl font-bold text-pink-600 flex items-center">
                    <i class="fas fa-shopping-cart mr-2"></i> Your Collection
                </h2>
                <button id="close-cart" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <!-- Cart Items -->
            <div id="cart-items" class="flex-1 overflow-y-auto cart-scrollbar p-4">
                <!-- Empty cart state -->
                <div id="empty-cart" class="flex flex-col items-center justify-center h-full text-center">
                    <div class="anime-pulse mb-4">
                        <i class="fas fa-ghost text-6xl text-gray-300"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-500 mb-2">Your collection is empty</h3>
                    <p class="text-gray-400 mb-4">Add some awesome anime figures to your collection!</p>
                    <button id="close-cart-empty" class="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors">
                        Browse Figures
                    </button>
                </div>
                
                <!-- Cart items will be added here dynamically -->
            </div>
            
            <!-- Cart Footer -->
            <div class="border-t p-4 bg-gray-50">
                <div class="flex justify-between mb-2">
                    <span class="font-semibold">Subtotal:</span>
                    <span id="cart-subtotal" class="font-bold">$0.00</span>
                </div>
                <div class="flex justify-between mb-4">
                    <span class="font-semibold">Shipping:</span>
                    <span id="cart-shipping" class="font-bold">$0.00</span>
                </div>
                <div class="flex justify-between text-lg font-bold mb-4">
                    <span>Total:</span>
                    <span id="cart-total">$0.00</span>
                </div>
                
                <div class="mb-4">
                    <label class="checkbox-container">Gift wrap this order (+$5.00)
                        <input type="checkbox" id="gift-wrap">
                        <span class="checkmark"></span>
                    </label>
                </div>
                
                <button id="checkout-btn" class="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                    Checkout
                </button>
                
                <div class="mt-4 text-center text-xs text-gray-500">
                    <p>Free shipping on orders over $100</p>
                    <p class="mt-1">30-day return policy</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Cart overlay -->
    <div id="cart-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Cart state
            let cart = [];
            
            // DOM elements
            const cartToggle = document.getElementById('cart-toggle');
            const closeCart = document.getElementById('close-cart');
            const closeCartEmpty = document.getElementById('close-cart-empty');
            const cartSidebar = document.getElementById('cart-sidebar');
            const cartOverlay = document.getElementById('cart-overlay');
            const cartItemsContainer = document.getElementById('cart-items');
            const emptyCart = document.getElementById('empty-cart');
            const cartCount = document.getElementById('cart-count');
            const cartSubtotal = document.getElementById('cart-subtotal');
            const cartShipping = document.getElementById('cart-shipping');
            const cartTotal = document.getElementById('cart-total');
            const checkoutBtn = document.getElementById('checkout-btn');
            const giftWrap = document.getElementById('gift-wrap');
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            
            // Toggle cart visibility
            function toggleCart() {
                if (cartSidebar.classList.contains('translate-x-full')) {
                    cartSidebar.classList.remove('translate-x-full');
                    cartSidebar.classList.add('cart-slide-in');
                    cartOverlay.classList.remove('hidden');
                } else {
                    cartSidebar.classList.add('cart-slide-out');
                    setTimeout(() => {
                        cartSidebar.classList.add('translate-x-full');
                        cartSidebar.classList.remove('cart-slide-out');
                    }, 300);
                    cartOverlay.classList.add('hidden');
                }
            }
            
            // Close cart
            function closeCartSidebar() {
                cartSidebar.classList.add('cart-slide-out');
                setTimeout(() => {
                    cartSidebar.classList.add('translate-x-full');
                    cartSidebar.classList.remove('cart-slide-out');
                }, 300);
                cartOverlay.classList.add('hidden');
            }
            
            // Event listeners
            cartToggle.addEventListener('click', toggleCart);
            closeCart.addEventListener('click', closeCartSidebar);
            closeCartEmpty.addEventListener('click', closeCartSidebar);
            cartOverlay.addEventListener('click', closeCartSidebar);
            
            // Add to cart functionality
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    const name = this.getAttribute('data-name');
                    const price = parseFloat(this.getAttribute('data-price'));
                    const image = this.getAttribute('data-image');
                    
                    // Check if item already exists in cart
                    const existingItem = cart.find(item => item.id === id);
                    
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            id,
                            name,
                            price,
                            image,
                            quantity: 1
                        });
                    }
                    
                    updateCart();
                    toggleCart();
                    
                    // Add animation to button
                    this.innerHTML = '<i class="fas fa-check mr-1"></i> Added';
                    this.classList.add('bg-green-500', 'hover:bg-green-600');
                    this.classList.remove('bg-pink-600', 'hover:bg-pink-700');
                    
                    setTimeout(() => {
                        this.innerHTML = 'Add to Cart';
                        this.classList.remove('bg-green-500', 'hover:bg-green-600');
                        this.classList.add('bg-pink-600', 'hover:bg-pink-700');
                    }, 2000);
                });
            });
            
            // Update cart UI
            function updateCart() {
                // Update cart count
                const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
                cartCount.textContent = totalItems;
                
                // Show/hide empty cart
                if (cart.length === 0) {
                    emptyCart.classList.remove('hidden');
                    cartItemsContainer.innerHTML = '';
                    checkoutBtn.disabled = true;
                } else {
                    emptyCart.classList.add('hidden');
                    
                    // Generate cart items HTML
                    let itemsHTML = '';
                    cart.forEach(item => {
                        itemsHTML += `
                            <div class="cart-item flex border-b pb-4 mb-4" data-id="${item.id}">
                                <div class="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-4 flex-shrink-0">
                                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-semibold">${item.name}</h4>
                                    <p class="text-pink-600 font-bold">$${item.price.toFixed(2)}</p>
                                    <div class="flex items-center mt-2">
                                        <button class="quantity-btn decrease bg-gray-200 hover:bg-gray-300 w-6 h-6 rounded flex items-center justify-center">
                                            <i class="fas fa-minus text-xs"></i>
                                        </button>
                                        <span class="quantity mx-2">${item.quantity}</span>
                                        <button class="quantity-btn increase bg-gray-200 hover:bg-gray-300 w-6 h-6 rounded flex items-center justify-center">
                                            <i class="fas fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col items-end justify-between">
                                    <button class="remove-item text-gray-400 hover:text-red-500">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                    <span class="item-total font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        `;
                    });
                    
                    cartItemsContainer.innerHTML = itemsHTML;
                    
                    // Add event listeners to quantity buttons
                    document.querySelectorAll('.quantity-btn').forEach(button => {
                        button.addEventListener('click', function() {
                            const itemElement = this.closest('.cart-item');
                            const itemId = itemElement.getAttribute('data-id');
                            const item = cart.find(item => item.id === itemId);
                            const quantityElement = itemElement.querySelector('.quantity');
                            const itemTotalElement = itemElement.querySelector('.item-total');
                            
                            if (this.classList.contains('increase')) {
                                item.quantity += 1;
                            } else if (this.classList.contains('decrease')) {
                                if (item.quantity > 1) {
                                    item.quantity -= 1;
                                } else {
                                    // Remove item if quantity reaches 0
                                    cart = cart.filter(cartItem => cartItem.id !== itemId);
                                }
                            }
                            
                            updateCart();
                        });
                    });
                    
                    // Add event listeners to remove buttons
                    document.querySelectorAll('.remove-item').forEach(button => {
                        button.addEventListener('click', function() {
                            const itemElement = this.closest('.cart-item');
                            const itemId = itemElement.getAttribute('data-id');
                            cart = cart.filter(item => item.id !== itemId);
                            updateCart();
                        });
                    });
                    
                    checkoutBtn.disabled = false;
                }
                
                // Calculate totals
                const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                const shipping = subtotal >= 100 ? 0 : 5.99;
                const total = subtotal + shipping;
                
                cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
                cartShipping.textContent = subtotal >= 100 ? 'FREE' : `$${shipping.toFixed(2)}`;
                cartTotal.textContent = `$${total.toFixed(2)}`;
                
                // Update shipping display if gift wrap is checked
                if (giftWrap.checked) {
                    updateGiftWrap();
                }
            }
            
            // Gift wrap functionality
            giftWrap.addEventListener('change', updateGiftWrap);
            
            function updateGiftWrap() {
                const subtotal = parseFloat(cartSubtotal.textContent.replace('$', ''));
                let shipping = subtotal >= 100 ? 0 : 5.99;
                
                if (giftWrap.checked) {
                    shipping += 5;
                    cartShipping.textContent = subtotal >= 100 ? '+$5.00' : `$${(shipping).toFixed(2)}`;
                } else {
                    cartShipping.textContent = subtotal >= 100 ? 'FREE' : `$${shipping.toFixed(2)}`;
                }
                
                const total = subtotal + shipping + (giftWrap.checked ? 5 : 0);
                cartTotal.textContent = `$${total.toFixed(2)}`;
            }
            
            // Checkout button
            checkoutBtn.addEventListener('click', function() {
                alert('Thank you for your purchase! Your anime figures will be shipped soon.');
                cart = [];
                updateCart();
                closeCartSidebar();
            });
            
            // Initialize cart
            updateCart();
        });
    </script>
</body>
</html>