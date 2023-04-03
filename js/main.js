const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const IconMenu = document.querySelector('.icon-menu')
const mobileMenu = document.querySelector('.mobile-menu')

const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleMenu)
IconMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', shoppingCartAside)

function toggleMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    
    if (!isProductDetailClosed) {
        productDetail.classList.toggle('inactive')
    }

    return desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    
    if (!isProductDetailClosed) {
        productDetail.classList.toggle('inactive')
    }

    return mobileMenu.classList.toggle('inactive')
}

function shoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive')
    }

    return productDetail.classList.toggle('inactive')
}