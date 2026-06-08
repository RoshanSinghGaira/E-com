/* ===================================================
   LunaDesk — Premium Futuristic E-Commerce
   Core Logic & Micro-Interactions
   =================================================== */

// ---------- Product Database (12 Premium Items) ----------
const products = [
    {
        id: 1,
        name: "Nova75 Mechanical Keyboard",
        category: "keyboards",
        price: 189.00,
        oldPrice: 229.00,
        rating: 5,
        ratingCount: 124,
        image: "images/mech-keyboard.png",
        badge: "new",
        description: "An ultra-compact 75% mechanical keyboard featuring hot-swappable tactile switches, pre-lubed stabilizers, sound-dampening foam layers, and a heavy machined aluminum casing with premium side-glow RGB lighting."
    },
    {
        id: 2,
        name: "Hexa LED Wall Panels",
        category: "lighting",
        price: 149.00,
        oldPrice: 179.00,
        rating: 5,
        ratingCount: 89,
        image: "images/led-panel.png",
        badge: "sale",
        description: "Modular hexagonal smart light panels that easily mount to any wall surface. Syncs in real-time with your music or computer screen, and is fully controllable via the LunaApp, Alexa, or Google Home."
    },
    {
        id: 3,
        name: "Ultrawide QD-OLED Monitor",
        category: "monitors",
        price: 1299.00,
        oldPrice: 1499.00,
        rating: 5,
        ratingCount: 42,
        image: "images/monitor-setup.png",
        badge: "hot",
        description: "A breathtaking 34-inch curved QD-OLED display offering a lightning-fast 175Hz refresh rate, 0.03ms response time, VESA DisplayHDR True Black 400, and a stunning cyber-minimalist back panel."
    },
    {
        id: 4,
        name: "Wireless Studio Headphones",
        category: "audio",
        price: 299.00,
        oldPrice: 349.00,
        rating: 5,
        ratingCount: 96,
        image: "images/wireless-audio.png",
        badge: "new",
        description: "High-fidelity audio designed for creators. Features hybrid active noise cancellation, custom audio profiling, comfortable memory-foam earcups, and up to 40 hours of battery life with USB-C quick charge."
    },
    {
        id: 5,
        name: "Smart Ambient Desk Lamp",
        category: "lighting",
        price: 99.00,
        oldPrice: 129.00,
        rating: 4,
        ratingCount: 78,
        image: "images/smart-lighting.png",
        badge: "",
        description: "A sleek, architect-style smart desk lamp featuring dual-zone customizable accent lighting, a precision step-less brightness dial, color temperature control, and a integrated Qi wireless charging base."
    },
    {
        id: 6,
        name: "Multi-Device Charging Dock",
        category: "gadgets",
        price: 79.00,
        oldPrice: 99.00,
        rating: 4,
        ratingCount: 112,
        image: "images/productivity-gadget.png",
        badge: "sale",
        description: "Constructed from sandblasted anodized aluminum and tempered glass, this 3-in-1 fast charger supports MagSafe charging for iPhone, Apple Watch, and AirPods simultaneously with active heat control."
    },
    {
        id: 7,
        name: "Cyber-Minimalist Desk Mat",
        category: "accessories",
        price: 49.00,
        oldPrice: 59.00,
        rating: 5,
        ratingCount: 230,
        image: "images/desk-mat.png",
        badge: "",
        description: "An extra-large desk mat featuring a spill-resistant hybrid textured surface optimized for mouse tracking. Includes a dual-zone edge RGB fiber optic tube for clean, ambient illumination."
    },
    {
        id: 8,
        name: "Apex 4K Ringlight Webcam",
        category: "gadgets",
        price: 159.00,
        oldPrice: 199.00,
        rating: 4,
        ratingCount: 65,
        image: "images/webcam-pro.png",
        badge: "hot",
        description: "Stunning 4K resolution camera with intelligent AI auto-focus, background blur, and a multi-level adjustable LED ring light to keep you looking pristine on professional calls and streams."
    },
    {
        id: 9,
        name: "Precision Wireless Mouse",
        category: "accessories",
        price: 89.00,
        oldPrice: 109.00,
        rating: 5,
        ratingCount: 147,
        image: "images/mouse-pro.png",
        badge: "",
        description: "An ultra-ergonomic wireless mouse equipped with a next-gen 26K DPI optical sensor, completely silent tactile switches, and dual connectivity modes (2.4GHz wireless & Bluetooth)."
    },
    {
        id: 10,
        name: "Nexus 8-in-1 USB-C Hub",
        category: "gadgets",
        price: 119.00,
        oldPrice: 139.00,
        rating: 5,
        ratingCount: 54,
        image: "images/usb-hub.png",
        badge: "",
        description: "A sleek workspace expansion dock containing dual 4K @ 60Hz HDMI outputs, a high-speed Gigabit Ethernet port, SD card readers, and USB-A ports, all enclosed in a premium space-gray shell."
    },
    {
        id: 11,
        name: "Orbit Desktop Speakers",
        category: "audio",
        price: 199.00,
        oldPrice: 249.00,
        rating: 5,
        ratingCount: 81,
        image: "images/speaker-mini.png",
        badge: "new",
        description: "Compact active desktop reference monitors packing dynamic bass-reflex ports, Bluetooth 5.2 connectivity, high-res audio certification, and responsive circular RGB accent lights."
    },
    {
        id: 12,
        name: "Minimalist Desk Organizer",
        category: "accessories",
        price: 69.00,
        oldPrice: 89.00,
        rating: 4,
        ratingCount: 92,
        image: "images/desk-accessory.png",
        badge: "",
        description: "A solid walnut wood desk shelf with anodized aluminum dividers. Keeps your writing tools, tablet, cables, and small items organized in an elegant, modern workspace display."
    }
];

// ---------- Global State ----------
let cart = [];
let activeFilter = "all";

// ---------- DOM Elements ----------
const productsGrid = document.getElementById("products-grid");
const cartToggle = document.getElementById("cart-toggle");
const cartSidebar = document.getElementById("cart-sidebar");
const cartClose = document.getElementById("cart-close");
const cartOverlay = document.getElementById("cart-overlay");
const cartCount = document.getElementById("cart-count");
const cartItemCount = document.getElementById("cart-item-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartFooter = document.getElementById("cart-footer");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");

const searchToggle = document.getElementById("search-toggle");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalCategory = document.getElementById("modal-category");
const modalName = document.getElementById("modal-name");
const modalRating = document.getElementById("modal-rating");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalOldPrice = document.getElementById("modal-old-price");
const modalAddCart = document.getElementById("modal-add-cart");

const filterButtons = document.querySelectorAll(".filter-btn");
const categoryCards = document.querySelectorAll(".category-card");
const header = document.getElementById("header");
const mobileToggle = document.getElementById("mobile-toggle");
const navLinks = document.getElementById("nav-links");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// ---------- Star Renderer Helper ----------
function renderStars(rating) {
    let starHTML = '<div class="stars">';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starHTML += '<span class="star">★</span>';
        } else {
            starHTML += '<span class="star empty">★</span>';
        }
    }
    starHTML += '</div>';
    return starHTML;
}

// ---------- Render Products ----------
function renderProducts(items) {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    if (items.length === 0) {
        productsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: var(--space-3xl); color: var(--text-secondary);">
        <p>No products found matching the criteria.</p>
      </div>
    `;
        return;
    }

    items.forEach((product) => {
        const badgeHTML = product.badge
            ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>`
            : "";

        const oldPriceHTML = product.oldPrice
            ? `<span class="product-price-old">$${product.oldPrice.toFixed(2)}</span>`
            : "";

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
      <div class="product-image">
        ${badgeHTML}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-actions-overlay">
          <button class="product-action-btn quick-view" data-id="${product.id}">Quick View</button>
          <button class="product-action-btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          ${renderStars(product.rating)}
          <span class="rating-count">(${product.ratingCount})</span>
        </div>
        <div class="product-pricing">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          ${oldPriceHTML}
        </div>
      </div>
    `;

        productsGrid.appendChild(card);
    });

    // Re-bind click event listeners to rendered buttons
    bindProductEvents();
}

// ---------- Bind Product Card Actions ----------
function bindProductEvents() {
    document.querySelectorAll(".product-action-btn.quick-view").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            openQuickView(id);
        });
    });

    document.querySelectorAll(".product-action-btn.add-to-cart").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            addToCart(id);
        });
    });
}

// ---------- Shopping Cart Logic ----------
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cart.find((item) => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(`Added ${product.name} to cart!`);
}

function updateCartUI() {
    if (!cartItemsContainer || !cartCount || !cartItemCount) return;

    cartItemsContainer.innerHTML = "";
    let totalItems = 0;
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h4>Your cart is empty</h4>
        <p>Discover premium workspace products</p>
      </div>
    `;
        cartCount.textContent = "0";
        cartCount.classList.remove("visible");
        cartItemCount.textContent = "0 items";
        if (cartFooter) cartFooter.style.display = "none";
        return;
    }

    cart.forEach((item) => {
        totalItems += item.quantity;
        subtotal += item.product.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
      <img class="cart-item-image" src="${item.product.image}" alt="${item.product.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.product.name}</div>
        <div class="cart-item-price">$${item.product.price.toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn minus" data-id="${item.product.id}">-</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn plus" data-id="${item.product.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.product.id}">✕</button>
    `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Header Cart Counter Badge
    cartCount.textContent = totalItems;
    cartCount.classList.add("visible");
    cartItemCount.textContent = `${totalItems} item${totalItems > 1 ? "s" : ""}`;

    // Footer Totals
    if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (cartTotal) cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    if (cartFooter) cartFooter.style.display = "block";

    // Attach Listeners in Cart
    bindCartEvents();
}

function bindCartEvents() {
    document.querySelectorAll(".qty-btn.minus").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            changeQuantity(id, -1);
        });
    });

    document.querySelectorAll(".qty-btn.plus").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            changeQuantity(id, 1);
        });
    });

    document.querySelectorAll(".cart-item-remove").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            removeFromCart(id);
        });
    });
}

function changeQuantity(productId, delta) {
    const item = cart.find((item) => item.product.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex((item) => item.product.id === productId);
    if (itemIndex > -1) {
        const name = cart[itemIndex].product.name;
        cart.splice(itemIndex, 1);
        updateCartUI();
        showToast(`Removed ${name} from cart.`);
    }
}

// ---------- Quick View Modal ----------
function openQuickView(productId) {
    const product = products.find((p) => p.id === productId);
    if (!product || !modalOverlay) return;

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalCategory.textContent = product.category;
    modalName.textContent = product.name;
    modalRating.innerHTML = `${renderStars(product.rating)} <span class="rating-count" style="margin-left:8px;">(${product.ratingCount} reviews)</span>`;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;

    if (product.oldPrice) {
        modalOldPrice.textContent = `$${product.oldPrice.toFixed(2)}`;
        modalOldPrice.style.display = "inline";
    } else {
        modalOldPrice.style.display = "none";
    }

    // Bind Add to Cart inside Modal
    modalAddCart.onclick = () => {
        addToCart(product.id);
        modalOverlay.classList.remove("active");
    };

    modalOverlay.classList.add("active");
}

// ---------- Toast Notification ----------
let toastTimeout;
function showToast(message) {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add("visible");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("visible");
    }, 3000);
}

// ---------- Search Functionality ----------
function performSearch(query) {
    if (!searchResults) return;
    searchResults.innerHTML = "";

    if (!query.trim()) {
        searchResults.innerHTML = "";
        return;
    }

    const matches = products.filter(
        (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
    );

    if (matches.length === 0) {
        searchResults.innerHTML = `
      <div style="padding: var(--space-md); text-align: center; color: var(--text-muted); font-size: 0.9rem;">
        No matches found for "${query}"
      </div>
    `;
        return;
    }

    matches.forEach((product) => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="search-result-info">
        <h4>${product.name}</h4>
        <p>$${product.price.toFixed(2)} — in ${product.category}</p>
      </div>
    `;
        item.addEventListener("click", () => {
            searchOverlay.classList.remove("active");
            searchInput.value = "";
            searchResults.innerHTML = "";
            openQuickView(product.id);
        });
        searchResults.appendChild(item);
    });
}

// ---------- Particle Background System ----------
function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 70;
    const maxDistance = 120;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.size = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.1;
            // Faint purple/cyan color tone
            this.color = Math.random() > 0.5 ? "124, 92, 255" : "0, 212, 255";
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        // Draw connecting lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const alpha = (1 - dist / maxDistance) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 92, 255, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    animate();
}

// ---------- Event Listeners Init ----------
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial render
    renderProducts(products);

    // 2. Initialize background particles
    initParticles();

    // 3. Header Scroll Styling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 4. Cart Sidebar Toggles
    if (cartToggle) {
        cartToggle.addEventListener("click", () => {
            cartSidebar.classList.add("active");
            cartOverlay.classList.add("active");
        });
    }

    if (cartClose) {
        cartClose.addEventListener("click", () => {
            cartSidebar.classList.remove("active");
            cartOverlay.classList.remove("active");
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", () => {
            cartSidebar.classList.remove("active");
            cartOverlay.classList.remove("active");
        });
    }

    // 5. Search Overlay Toggles
    if (searchToggle) {
        searchToggle.addEventListener("click", () => {
            searchOverlay.classList.add("active");
            setTimeout(() => searchInput.focus(), 150);
        });
    }

    if (searchClose) {
        searchClose.addEventListener("click", () => {
            searchOverlay.classList.remove("active");
            searchInput.value = "";
            searchResults.innerHTML = "";
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            performSearch(e.target.value);
        });
    }

    // Close search on Esc key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (searchOverlay.classList.contains("active")) {
                searchOverlay.classList.remove("active");
                searchInput.value = "";
                searchResults.innerHTML = "";
            }
            if (modalOverlay.classList.contains("active")) {
                modalOverlay.classList.remove("active");
            }
        }
    });

    // 6. Category Navigation
    categoryCards.forEach((card) => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");
            activeFilter = category;

            // Update active state in filters
            filterButtons.forEach((btn) => {
                if (btn.getAttribute("data-filter") === category) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });

            // Filter products
            const filtered = products.filter((p) => p.category === category);
            renderProducts(filtered);

            // Scroll to view
            const targetSec = document.getElementById("products");
            if (targetSec) {
                targetSec.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 7. Grid Filter Buttons
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            activeFilter = filter;

            if (filter === "all") {
                renderProducts(products);
            } else {
                const filtered = products.filter((p) => p.category === filter);
                renderProducts(filtered);
            }
        });
    });

    // 8. Mobile Menu Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            mobileToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        // Close menu when clicking link
        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileToggle.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // 9. Quick View Close Modal
    if (modalClose) {
        modalClose.addEventListener("click", () => {
            modalOverlay.classList.remove("active");
        });
    }
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove("active");
            }
        });
    }

    // 10. Interactive Spots Showcase Bindings
    const spots = document.querySelectorAll(".showcase-spots .spot");
    const spotProductIds = [3, 1, 2]; // QD-OLED Monitor, Nova75 Keyboard, Hexa LED Panels

    spots.forEach((spot, idx) => {
        spot.addEventListener("click", (e) => {
            e.stopPropagation();
            openQuickView(spotProductIds[idx]);
        });
    });

    // 11. Scroll Entrance Animations (Observer adding .visible)
    const animObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
        animObserver.observe(el);
    });

    // 12. Newsletter Form Submit
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Successfully subscribed to LunaDesk drops!");
            newsletterForm.reset();
        });
    }

    // 13. Checkout button simulator
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            showToast("Launching secure checkout terminal... Redirecting.");
            setTimeout(() => {
                alert("Thank you for exploring LunaDesk! This is a static luxury demonstration store. Your custom desk setups await.");
            }, 1000);
        });
    }
});

// ---------- Loading Fadeout ----------
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
            setTimeout(() => {
                loader.remove();
            }, 600);
        }, 1000);
    }
});