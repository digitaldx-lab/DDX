// cart.js - Reusable Cart System
class CartSystem {
    constructor() {
        this.cart = [];
        this.cartIconM = null;
        this.cartAside = null;
        this.init();
    }

    init() {
        this.loadCart();
        this.createCartIconM();
        this.createCartAside();
        this.attachEventListeners();
        this.updateCartAside();
        this.updateCartIconM();
    }

    // Cart Storage Management
    loadCart() {
        const savedCart = localStorage.getItem('labCart');
        this.cart = savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('labCart', JSON.stringify(this.cart));
        this.updateCartIconM();
        this.updateCartAside();
    }

    // Cart Operations
    addToCart(test) {
        const existingItem = this.cart.find(item => item.id === test.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...test,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showAddToCartNotification(test.name);
    }

    removeFromCart(testId) {
        this.cart = this.cart.filter(item => item.id !== testId);
        this.saveCart();
    }

    updateQuantity(testId, newQuantity) {
        if (newQuantity < 1) {
            this.removeFromCart(testId);
            return;
        }

        const item = this.cart.find(item => item.id === testId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
        }
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    // UI Creation
    createCartIconM() {
        // Remove existing cart icon if any
        const existingIcon = document.getElementById('cartIconM');
        if (existingIcon) {
            existingIcon.remove();
        }

        // Create cart icon
        this.cartIconM = document.createElement('div');
        this.cartIconM.id = 'cartIconM';
        this.cartIconM.className = 'cart-icon';
        this.cartIconM.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count">0</span>
        `;


        // Add to header
        const header = document.querySelector('header .nav-container .mobile-menu').parentElement;
        if (header) {
            const contactLi = header.querySelector('.fa-bars')?.closest('li');
            if (contactLi && contactLi.parentElement) {
                contactLi.parentElement.parentElement.insertBefore(
                    document.createElement('li'),
                    contactLi.parentElement
                ).outerHTML = `<li>${this.cartIconM.outerHTML}</li>`;
            } else {
                header.querySelector('.nav-links').innerHTML += `<li>${this.cartIconM.outerHTML}</li>`;
            }
        }

        // Re-select the cart icon after adding to DOM
        this.cartIconM = document.getElementById('cartIconM');
    }

    createCartAside() {
        // Remove existing cart aside if any
        const existingAside = document.getElementById('cartAside');
        if (existingAside) {
            existingAside.remove();
        }

        // Create cart aside
        this.cartAside = document.createElement('div');
        this.cartAside.id = 'cartAside';
        this.cartAside.className = 'cart-aside';
        this.cartAside.innerHTML = `
            <div class="cart-header">
                <h3>Your Lab Tests Cart</h3>
                <button class="close-cart" id="closeCart">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="cart-content">
                <div class="cart-items" id="cartItems">
                    <!-- Cart items will be populated here -->
                </div>
                <div class="cart-empty" id="cartEmpty">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <p>Add tests to get started</p>
                </div>
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>Total:</span>
                    <span class="total-price">₦0</span>
                </div>
                <button class="checkout-btn" id="checkoutBtn">
                    <i class="fab fa-whatsapp"></i>
                    Checkout via WhatsApp
                </button>
            </div>
        `;

        document.body.appendChild(this.cartAside);
    }

    // UI Updates
    updateCartIconM() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.getTotalItems();
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    updateCartAside() {
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const totalPrice = document.querySelector('.total-price');

        if (this.cart.length === 0) {
            cartItems.innerHTML = '';
            cartEmpty.style.display = 'flex';
            totalPrice.textContent = '₦0';
            return;
        }

        cartEmpty.style.display = 'none';
        
        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'">
                </div>
                <div class="item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <p class="item-category">${item.category}</p>
                    <div class="item-price">₦${item.price.toLocaleString()}</div>
                </div>
                <div class="item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-id="${item.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        totalPrice.textContent = `₦${this.getTotalPrice().toLocaleString()}`;
    }

    // Event Handlers
    attachEventListeners() {
        // Cart icon click
        document.addEventListener('click', (e) => {
            if (e.target.closest('#cartIconM')) {
                this.toggleCartAside();
            }
        });

        // Close cart
        document.addEventListener('click', (e) => {
            if (e.target.closest('#closeCart') || e.target.classList.contains('cart-aside')) {
                this.hideCartAside();
            }
        });

        // Quantity controls
        document.addEventListener('click', (e) => {
            const plusBtn = e.target.closest('.quantity-btn.plus');
            const minusBtn = e.target.closest('.quantity-btn.minus');
            const removeBtn = e.target.closest('.remove-btn');

            if (plusBtn) {
                const testId = parseInt(plusBtn.dataset.id);
                const item = this.cart.find(item => item.id === testId);
                if (item) {
                    this.updateQuantity(testId, item.quantity + 1);
                }
            }

            if (minusBtn) {
                const testId = parseInt(minusBtn.dataset.id);
                const item = this.cart.find(item => item.id === testId);
                if (item) {
                    this.updateQuantity(testId, item.quantity - 1);
                }
            }

            if (removeBtn) {
                const testId = parseInt(removeBtn.dataset.id);
                this.removeFromCart(testId);
            }
        });

        // Checkout button
        document.addEventListener('click', (e) => {
            if (e.target.closest('#checkoutBtn')) {
                this.checkout();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideCartAside();
            }
        });
    }

    // Cart Visibility
    toggleCartAside() {
        this.cartAside.classList.toggle('active');
        document.body.style.overflow = this.cartAside.classList.contains('active') ? 'hidden' : 'auto';
    }

    showCartAside() {
        this.cartAside.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hideCartAside() {
        this.cartAside.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Notifications
    showAddToCartNotification(testName) {
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${testName} added to cart</span>
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // WhatsApp Integration
    checkout() {
        if (this.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const message = this.formatWhatsAppMessage();
        const phoneNumber = '+2348120527885'; // Replace with your WhatsApp number
        
        // Detect device and create appropriate WhatsApp URL
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile 
            ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Clear cart after checkout
        this.clearCart();
    }

    formatWhatsAppMessage() {
        const itemsList = this.cart.map(item => 
            `• ${item.name} (${item.quantity} x ₦${item.price.toLocaleString()}) = ₦${(item.quantity * item.price).toLocaleString()}`
        ).join('\n');

        return `Hello! I would like to order the following lab tests:\n\n${itemsList}\n\nTotal: ₦${this.getTotalPrice().toLocaleString()}\n\nPlease let me know how i can proceed with payment`;
    }

    // Public method to add items from outside
    addItem(test) {
        this.addToCart(test);
    }

    // Public method to get cart count
    getCartCount() {
        return this.getTotalItems();
    }
}

// Initialize cart system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.labCart = new CartSystem();
});
