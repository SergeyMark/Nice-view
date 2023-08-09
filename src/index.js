const modalCall = document.querySelector('.backdrop-modal');
const mobileMenu = document.querySelector('#mobile-menu');
const hamburgerMenu = document.querySelector('.btn-hamburger');
const openModalBtn = document.querySelector('.js-btn-open');
const closeModalBtn = document.querySelector('.js-btn-close');
const closeMobileBtn = document.querySelector('.js-mobile-close')

// Modal Call
const openModal = function() {
    modalCall.classList.remove('hidden');
};

const closeModal = function () {
    modalCall.classList.add('hidden')
}

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)


//Mobile Menu
const openMobileMenu = function () {
    mobileMenu.classList.add('slide')
}

const closeMobileMenu = function() {
    mobileMenu.classList.remove('slide')
}

hamburgerMenu.addEventListener('click', openMobileMenu);
closeMobileBtn.addEventListener('click', closeMobileMenu)
