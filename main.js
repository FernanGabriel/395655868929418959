let products = [
    {
        id: 1,
        name: 'Antitranspirante em Creme Rexona Clinical Classic',
        image: '12',
        star: 3,
        discount: false,
        current_price: 'R$22.49',
        stock: 329,
        category: 'Smartphone',
        section: 'trend',
        url: 'product1.html'
    },
    {
        id: 2,
        name: 'Sérum Principia Mix-01',
        image: '35',
        star: 1,
        discount: true,
        current_price: 'R$59.00',
        old_price: '$104.99',
        discount_percent: 18,
        stock: 230,
        category: 'Smartphone',
        section: 'trend',
        url: 'product2.html'
    },
    {
        id: 3,
        name: 'Neutrogena Hydro Boost Water Gel 50g',
        image: '1',
        star: 2,
        discount: false,
        current_price: 'R$ 58.09',
        stock: 446,
        category: 'Smartphone',
        section: 'trend',
        url: 'product3.html'
    },
    {
        id: 4,
        name: 'Hidratante Skala Lavanda 400ml',
        image: '14',
        star: 1,
        discount: false,
        current_price: 'R$6.99',
        stock: 320,
        category: 'Smartphone',
        section: 'trend',
        url: 'product4.html'
    },
    {
        id: 5,
        name: 'Sabonete de Enxofre Granado 90 g',
        image: '27',
        star: 2,
        discount: true,
        current_price: 'R$7.00',
        old_price: 'R$8.00',
        discount_percent: 30,
        stock: 857,
        category: 'Smartphone',
        section: 'trend',
        url: 'product5.html'
    },
    {
        id: 6,
        name: 'Sabonete Liquido Dove 250ml',
        image: '29_1_1',
        star: 2,
        discount: false,
        current_price: 'R$12.99',
        stock: 431,
        category: 'Smartphone',
        section: 'trend',
        url: 'product6.html'
    },
    {
        id: 7,
        name: 'Óleo Corporal Amêndoa Sève - 200ml',
        image: '30_1',
        star: 1,
        discount: false,
        current_price: 'R$65.50',
        stock: 675,
        category: 'Smartphone',
        section: 'trend',
        url: 'product7.html'
    },
    {
        id: 8,
        name: 'Shampoo Anticaspa Clear - 400ml',
        image: '13_1',
        star: 1,
        discount: false,
        current_price: 'R$26.72',
        stock: 449,
        category: 'Smartphone',
        section: 'trend',
        url: 'product8.html'
    },
    {
        id: 9,
        name: 'Shampoo Siàge Cauterização 250ml',
        image: '10',
        star: 3,
        discount: false,
        current_price: 'R$47.99',
        stock: 538,
        category: 'Smartphone',
        section: 'trend',
        url: 'product9.html'
    },
    {
        id: 10,
        name: 'Gel de Limpeza Facial Cerave - 150g',
        image: '2',
        star: 5,
        discount: false,
        current_price: 'R$61.00',
        stock: 1209,
        category: 'Tablet',
        section: 'recommend',
        url: 'product10.html'
    },
    {
        id: 11,
        name: 'Creme Facial Needs - 50g',
        image: '5',
        star: 4,
        discount: false,
        current_price: 'R$57.00',
        stock: 824,
        category: 'Headset',
        section: 'recommend',
        url: 'product11.html'
    },
    {
        id: 12,
        name: 'Protetor Facil Bioré UV Milk 50FPS - 40ml',
        image: '3',
        star: 4,
        discount: false,
        current_price: 'R$53.39',
        stock: 446,
        category: 'Smartphone',
        section: 'recommend',
        url: 'product12.html'
    },
    {
        id: 13,
        name: 'Condicionador Pantene Hidratação - 170ml',
        image: '6',
        star: 4,
        discount: true,
        current_price: 'R$30.90',
        old_price: 'R$ 37.90',
        discount_percent: 20,
        stock: 522,
        category: 'Headset',
        section: 'recommend',
        url: 'product13.html'
    },
    {
        id: 14,
        name: 'Tree Hut VitC Esfoliante Corporal - 510g',
        image: '11',
        star: 4,
        discount: false,
        current_price: 'R$169.00',
        stock: 304,
        category: 'Speaker',
        section: 'recommend',
        url: 'product14.html'
    },
    {
        id: 15,
        name: 'Vitamina C Creamy - 30g',
        image: '17',
        star: 3,
        discount: true,
        current_price: 'R$ 79.92',
        old_price: 'R$ 82.92',
        discount_percent: 18,
        stock: 126,
        category: 'Backpack',
        section: 'recommend',
        url: 'product15.html'
    },
    {
        id: 16,
        name: 'Hidratante Corporal Creamy - 200g',
        image: '19',
        star: 4,
        discount: false,
        current_price: 'R$ 75.90',
        stock: 355,
        category: 'Console',
        section: 'recommend',
        url: 'product16.html'
    },
    {
        id: 17,
        name: 'Salon Line Gelatina Capilar - 550g',
        image: '7-2',
        star: 4,
        discount: true,
        current_price: 'R$23.90',
        old_price: 'R$27.90',
        discount_percent: 15,
        stock: 158,
        category: 'Watches',
        section: 'recommend',
        url: 'product17.html'
    },
    {
        id: 18,
        name: 'Mandelico Creamy - 30g',
        image: '16',
        star: 5,
        discount: false,
        current_price: 'R$52.00',
        stock: 860,
        category: 'Headset',
        section: 'recommend',
        url: 'product18.html'
    }
]




//   GET ELEMENTS TO TREND SECTION
const trendContainer = document.querySelector('.trend-products-swiper');
const recommendContainer = document.querySelector('.recommend-products-swiper');
let trendProducts = products.filter(product => product.section == 'trend');
let recommendProducts = products.filter(product => product.section == 'recommend');





if (trendContainer) {

    
    trendProducts.forEach(element => {
        let data = document.createElement('div');
        data.classList.add('swiper-slide');
        element.discount ? data.classList.add('indiscount') : '';
        let discount = element.discount ? `
        <div class="card-disc">
            <span>-${element.discount_percent}%</span>
        </div>`  : ``;
        let oldPrice = element.discount ? `
        <span class="old-price">${element.old_price}</span>` : ``;

        data.innerHTML = `
            <div class="swiper-slide product-card" data-id="${element.id}">
                <div class="card-photo">
                    <img src="img/products/${element.image}.jpg" alt="${element.image}">
                </div>
                ${discount}
                <div class="card-inform">
                    <a href="${element.url || ''}">${element.name}</a>
                    <div class="stars">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <span>(${element.star})</span>
                    </div>
                    <div class="price">
                    <span class="new-price">${element.current_price}</span>
                    ${oldPrice}
                    </div>
                </div>
                <div class="addtocard">
                    <button class="trend-add addToCartBtn">ADICIONAR</button>
                </div>
                <div class="adds">
                  <div class="add-box quick-view-btn" onClick="quickView(event)"><i class="far fa-eye trendcard-add"></i></div>
                  <div class="add-box add-to-wishlist"><i class="far fa-heart trendcard-add"></i></div>
               </div>
            </div>
    `
        trendContainer.appendChild(data);
    })
    recommendProducts.forEach(element => {
        let data = document.createElement('div');
        data.classList.add('swiper-slide');
        element.discount ? data.classList.add('indiscount') : '';
        let discount = element.discount ? `
        <div class="card-disc">
            <span>-${element.discount_percent}%</span>
        </div>`  : ``;
        let oldPrice = element.discount ? `
        <span class="old-price">${element.old_price}</span>` : ``;

        data.innerHTML = `
            <div class="swiper-slide product-card" data-id="${element.id}">
                <div class="card-photo">
                    <img src="img/products/${element.image}.jpg" alt="${element.image}">
                </div>
                ${discount}
                <div class="card-inform">
                    <a href="${element.url || ''}">${element.name}</a>
                    <div class="stars">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <span>(${element.star})</span>
                    </div>
                    <div class="price">
                    <span class="new-price">${element.current_price}</span>
                    ${oldPrice}
                    </div>
                </div>
                <div class="addtocard">
                    <button class="trend-add addToCartBtn">ADICIONAR AO CARRINHO</button>
                </div>
                <div class="adds">
                  <div class="add-box quick-view-btn" onClick="quickView(event)"><i class="far fa-eye trendcard-add"></i></div>
                  <div class="add-box add-to-wishlist"><i class="far fa-heart trendcard-add"></i></div>
               </div>
            </div>

            
    `
    
        recommendContainer.appendChild(data);

        
        
    })
}






//   QUICK VIEW SECTION
const quickView = (e) => {
    const closest = e.target.closest(".product-card");
    const product = products.find((item) => item.id == closest.dataset.id);
    showViewModal(product)
}

const viewModal = document.querySelector('.quick-view-modal');
const hideModal = () => {
    if (viewModal.classList.contains('fade-in-modal')) {
        viewModal.classList.remove('fade-in-modal');
    }
    viewModal.classList.add('fade-out-modal');
    setTimeout(() => {
        viewModal.classList.remove('show-modal');
        viewModal.classList.remove('fade-out-modal');
    }, 400)
}

const showViewModal = (data) => {
    data.discount ? viewModal.classList.add('indiscount') : '';
    let oldPrice = data.discount ? `
        <span class="old-price">${data.old_price}</span>` : ``;
    viewModal.innerHTML = `
    <div class="quick-view-overlay"></div>
        <div class="modal-container product-card" data-id=${data.id}>
            <div class="product-img"><img src="./img/products/${data.image}.jpg" alt="${data.category}" draggable="false"></div>
            <div class="content">
                <h2>${data.name}</h2>
                <div class="price">
                    <p class="new-price">${data.current_price}</p>
                    ${oldPrice}
                </div>
                <div class="product-prop">
                    <ul>
                        <li>Textura Suave: Fácil aplicação.</li>
                        <li>Embalagem: Preserva a frescura e facilita o uso.</li>
                        <li>Ingredientes: Atendem às suas necessidades.</li>
                        <li>Qualidade: Resultados visíveis.</li>
                    </ul>
                </div>
                <div class="availability">
                    <p class="txt">Disponibilidade:</p>
                    <p class="stock-num">${data.stock} em estoque</p>
                </div>
                <div class="add-to-cart">
                    <button class="btn addToCartBtn">ADICIONAR AO CARRINHO</button>
            </div>
            <div class="close-modal">
                <img class="btn closeBtn" src="./img/icon/x.svg" alt="closeBtn" onClick="hideModal()"   >
            </div>
        </div>s
            <div class="close-modal">
                <img class="btn closeBtn" src="./img/icon/x.svg" alt="closeBtn" onClick="hideModal()"   >
            </div>
        </div>
        `;
    viewModal.classList.add('show-modal');
    viewModal.classList.add('fade-in-modal');
    addToCart();
    overlayModal();
}



const overlayModal = () => {
    const quickViewOverlay = document.querySelector('.quick-view-overlay');
    quickViewOverlay.addEventListener('click', () => {
        hideModal();
    })
}


const totalPriceCart = document.querySelector('.total-price-count');
const updateCartHeaderPrice = (price) => {
    price = JSON.parse(localStorage.getItem('totalPrice'));
    price = price == null ? `0.00` : price;
    totalPriceCart.innerHTML = `${price}`;
}

let cart = [];
cart = JSON.parse(localStorage.getItem('cart'));
cart = cart == null ? [] : cart;
cart = cart[0] == null ? [] : cart;
let subTotalPrice = 0;


const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((el) => {
      const price = parseFloat(el.current_price.slice(2)); // Remove "R$" and convert to float
      totalPrice += price * el.numberOfUnits;
    });
  
    totalPrice = totalPrice.toFixed(2); // Round to 2 decimal places
    subTotalPrice = totalPrice;
    updateCartHeaderPrice(`R$${totalPrice}`); // Update the total price in the header
    localStorage.setItem('totalPrice', JSON.stringify(`R$${totalPrice}`)); // Store the total price in local storage
  
    return totalPrice;
  };

const addToCart = () => {
    const addToCartBtns = document.querySelectorAll('.addToCartBtn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!(btn.classList.contains('added'))) {
                const closest = e.target.closest(".product-card");
                const productId = closest.dataset.id;
                const product = products.find(item => item.id == productId);
                if (cart.some(item => item.id == productId)) {
                    cart.forEach(item => {
                        if (item.id == productId && item.numberOfUnits != product.stock) {
                            item.numberOfUnits = item.numberOfUnits + 1;
                        }
                    })
                }
                else {
                    cart.push({
                        ...product,
                        numberOfUnits: 1
                    })
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount(cart.length);
                iziToast.success({
                    title: 'Successo',
                    message: `${product.name} foi adicionado ao carrinho`,
                    color: 'blue',
                    titleSize: '15px',
                    titleLineHeight: '1.4',
                    messageSize: '15px',
                    messageLineHeight: '1.4'
                });
                btn.innerHTML = 'VIEW CART';
                btn.classList.add('added');
            }
            else {
                btn.classList.remove('added');
            }
            btn.addEventListener('click', () => {
                location.href = 'cart.html';
            });
            renderSubTotal();
            const beforeinity = getTotalPrice();
            updateCartHeaderPrice(beforeinity);
        })
    })
}
addToCart();


//     WISHLIST
let wishList = [];
wishList = JSON.parse(localStorage.getItem('wishList'));
wishList = wishList == null ? [] : wishList;
wishList = wishList[0] == null ? [] : wishList;

//    adding to wishlist
const addToWishlistBtn = document.querySelectorAll('.add-to-wishlist');
addToWishlistBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        const closest = e.target.closest(".product-card");
        const product = products.find((item) => item.id == closest.dataset.id);
        const even = (element) => element.id == product.id;
        const isActive = wishList.some(even);
        if (isActive) {
            iziToast.warning({
                title: 'Erro',
                message: `Você já adicionou este prduto à Wishlist`,
                color: 'red',
                titleSize: '15px',
                titleLineHeight: '1.4',
                messageSize: '15px',
                messageLineHeight: '1.4',
            });
        }
        else {
            wishList.push(product);
            localStorage.setItem('wishList', JSON.stringify(wishList));
            updateWishlistCount(wishList.length);
            console.log(wishList);
            iziToast.success({
                title: 'Successo',
                message: `${product.name} foi adicionado a wishlist`,
                color: 'yellow',
                titleSize: '15px',
                titleLineHeight: '1.4',
                messageSize: '15px',
                messageLineHeight: '1.4',
            });
        }
        element.style.pointerEvents = "none";
        setTimeout(() => { element.style.pointerEvents = "auto" }, 2000)
    })
})

//    Deleting items from wislist
const wishlistItemContainer = document.querySelector('.wishlist-items-wrapper');
const delItemWishlist = (arr) => {
    const delBtns = document.querySelectorAll('.remove-from-wishlist');
    delBtns.forEach(element => {
        element.addEventListener('click', () => {
            const closest = element.closest(".product-card");
            const elementId = closest.dataset.id;
            arr = arr.filter(function (item) {
                return item.id != elementId
            })
            wishlistItemContainer.innerHTML = ``;
            mapWishList(arr);
            localStorage.setItem('wishList', JSON.stringify(arr));
            updateWishlistCount(arr.length);
        })
    })
}

//    Mapping items from wishlist
const mapWishList = (arr) => {
    if (arr.length > 0) {
        arr.map((element, index) => {
            let data = document.createElement('tr');
            data.classList.add('data-row');
            data.classList.add('product-card');
            data.dataset.id = element.id
            element.discount ? data.classList.add('indiscount') : '';
            let discountPrice = element.discount ?
                `  <span class="new-price">${element.current_price}</span>
                <span class="old-price">${element.old_price}</span>` :
                ` <span class="proce-txt">${element.current_price}</span>`;

            data.innerHTML = `
    <td class="product-remove">
    <div>
    <a class="remove remove-from-wishlist" title="Remove this product">×</a>
    </div>
    </td>
    <td class="product-thumbnail">
    <img src="./img/products/${element.image}.jpg"
    class="product-img" alt="product-image" loading="lazy"> </a>
    </td>
    <td class="product-name">
    <a href="">${element.name}</a>
    <div class="view-box quick-view-btn" onClick="quickView(event)">
    <span class="trendcard-add">view</span>
    </div>
    </td>
    <td class="product-price">
    ${discountPrice}
    </td>
    <td class="product-stock-status">
    <span class="wishlist-in-stock">${element.stock > 0 ? 'Com estoque' : 'Sem estoque'}</span>
    </td>
    <td class="product-add-to-cart">
    <button class="trend-add addToCartBtn">ADICIONAR AO CARRINHO</button>
    </td>
    `
            wishlistItemContainer.appendChild(data);
        })
    }
    else {
        let data = document.createElement('p');
        data.classList.add('data-row');
        data.classList.add('empty-text');
        data.innerHTML = `No products added to the wishlist`
        wishlistItemContainer.appendChild(data);
        wishlistItemContainer.style.height = '200px'
    }
    delItemWishlist(arr);
    addToCart();
}

if (wishlistItemContainer) {
    mapWishList(wishList);
}

const countWishList = document.querySelector('.wishlist-count');
const updateWishlistCount = (count) => {
    countWishList.innerHTML = count;
}
updateWishlistCount(wishList.length);





//     CART

const totalPriceText = document.querySelector('.total-price');

const renderSubTotal = () => {
    if (totalPriceText) {
      totalPriceText.innerHTML = `R$${getTotalPrice()}`;
    }
    else {
        getTotalPrice();

    }
    updateCartHeaderPrice(subTotalPrice);
};

const checkInputs = () => {
    const productInputs = document.querySelectorAll('.product-num');
    productInputs.forEach(input => {
        input.addEventListener('change', () => {
            const productId = input.closest('.product-card').dataset.id;
            const product = cart.filter(item => {
                return item.id == productId;
            })
            const stock = product[0].stock;
            if (input.value > stock) {
                input.value = stock;
                changeUnitsNumber('change', productId, stock);
            }
            else if (input.value < 1) {
                input.value = 1;
                changeUnitsNumber('change', productId, 1);
            }
            else {
                input.value = input.value.toString().replace(/^0+/, '');
                changeUnitsNumber('change', productId, input.value);
            }
        })
    })
}

const cartItemContainer = document.querySelector('.cart-items-wrapper');
const mapCart = () => {
    cartItemContainer.innerHTML = ``;
    if (cart.length > 0) {
        cart.map((element) => {
            let data = document.createElement('tr');
            data.classList.add('data-row');
            data.classList.add('product-card');
            data.dataset.id = element.id;
            data.innerHTML = `
    <td class="product-remove">
    <div>
    <a class="remove remove-from-cart" data-id="${element.id}" title="Remove this product">×</a>
    </div>
    </td>
    <td class="product-thumbnail">
    <img src="./img/products/${element.image}.jpg"
    class="product-img" alt="product-image" loading="lazy"> </a>
    </td>
    <td class="product-name">
    <a href="">${element.name}</a>
    </div>
    </td>
    <td class="product-price">
    <span class="price-txt">${element.current_price}</span>
    </td>
    <td class="product-quantity">
    <div class="quantity-input">
    <i class="fas fa-angle-up quantity-plus input-arrow" onClick="changeUnitsNumber('plus',${element.id})"></i>
    <input type="number" class="input-text product-num" step="1" min="1" max="${element.stock}" name="quantity" value="${element.numberOfUnits}"
    size="3">
    <i class="fas fa-angle-down quantity-minus input-arrow" onClick="changeUnitsNumber('minus', ${element.id})"></i>
    </div>
    </td>
    <td class="product-subtotal">
    <span class="nobr">
    </span>
    </td>
            `
            cartItemContainer.appendChild(data);
        })
    }
    else {
        let data = document.createElement('p');
        data.classList.add('data-row');
        data.classList.add('empty-text');
        data.innerHTML = `No products added to the wishlist`;
        cartItemContainer.appendChild(data);
        cartItemContainer.style.height = '200px';
    }

    delItemCart();
    renderSubTotal();
    checkInputs();
}

const delItemCart = () => {
    const delBtns = document.querySelectorAll('.remove-from-cart');
    delBtns.forEach(element => {
        element.addEventListener('click', () => {
            const closest = element.closest(".product-card");
            const elementId = closest.dataset.id;

            cart = cart.filter(function (item) {
                return item.id != elementId
            })
            localStorage.setItem('cart', JSON.stringify(cart));
            mapCart();
            updateCartCount(cart.length);
        })
    })
}

const changeUnitsNumber = (action, id, num) => {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
  
      if (item.id == id) {
        if (action == 'minus' && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action == 'plus' && numberOfUnits < item.stock) {
          numberOfUnits++;
        } else if (action == 'change') {
          numberOfUnits = num;
        }
      }
  
      const price = parseFloat(item.current_price.slice(2)); // Remova "R$" e converta para float
      const newPrice = action == 'change' ? `R$${(price * numberOfUnits).toFixed(2)}` : item.current_price; // Converta o preço de volta para string com "R$"
  
      return {
        ...item,
        numberOfUnits,
        current_price: newPrice,
      };
    });
  
    localStorage.setItem('cart', JSON.stringify(cart));
    mapCart(cart);
  };
  


const countCart = document.querySelector('.addtocart-count');
const updateCartCount = (count) => {
    countCart.innerHTML = count;
}

updateCartHeaderPrice(subTotalPrice);
updateCartCount(cart.length);

if (cartItemContainer) {
    mapCart();
};

const openMenuBtn = document.querySelector('.mobile-menu-bar');
const closeMenuBtns = document.querySelectorAll('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-main-menu');
const mobileMenuOverlay = document.querySelector('.mobile-main-menu__overlay');
openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active-menu');
});
closeMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        mobileMenu.classList.remove('active-menu');
    })
})