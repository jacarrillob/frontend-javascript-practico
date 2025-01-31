const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const IconMenu = document.querySelector('.icon-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')

const productDetailAside = document.querySelector('#product-detail')
const productDetailClose = document.querySelector('.product-detail-close')

const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleMenu)
IconMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', shoppingCartAside)
productDetailClose.addEventListener('click', closeProductDetailAside)

function toggleMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive')
    
    if (!isProductDetailClosed) {
        shoppingCartContainer.classList.toggle('inactive')
    }
    closeProductDetailAside()
    return desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive')
    
    if (!isProductDetailClosed) {
        shoppingCartContainer.classList.toggle('inactive')
    }
    closeProductDetailAside()
    return mobileMenu.classList.toggle('inactive')
}

function shoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive')
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive')
    }
    if (!isProductDetailAsideClosed) {
        productDetailAside.classList.toggle('inactive')
    }

    return shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside () {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.toggle('inactive')
    }
    desktopMenu.classList.add('inactive')
    return productDetailAside.classList.remove('inactive')
}

function closeProductDetailAside () {
    return productDetailAside.classList.add('inactive')
}

const productItems = [
    {
        name: 'Bike',
        price: 50000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Peluche',
        price: 75000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Balon',
        price: 10000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Parques',
        price: 15000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Bike',
        price: 50000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Peluche',
        price: 75000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Balon',
        price: 10000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Parques',
        price: 15000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },     {
        name: 'Bike',
        price: 50000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Peluche',
        price: 75000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Balon',
        price: 10000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Parques',
        price: 15000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
]

productItems.push({
    name: 'Triciclo',
    price: 20000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProductos(array) {
    array.forEach((element) => {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const imgProduct = document.createElement('img')
        imgProduct.setAttribute('src', element.image)
        imgProduct.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const div = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + element.price
        const productName = document.createElement('p')
        productName.innerHTML = element.name
    
        const productFigure = document.createElement('figure')
        const shoppingCart = document.createElement('img')
        shoppingCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    
    
        productInfo.appendChild(div)
        productInfo.appendChild(productFigure)
        div.appendChild(productPrice)
        div.appendChild(productName)
        productFigure.appendChild(shoppingCart)
    
        productCard.appendChild(imgProduct)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    });
}

renderProductos(productItems)