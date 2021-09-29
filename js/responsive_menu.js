const headerList = document.querySelector(".header__nav ul")
const headerButton = document.querySelector(".header__button button");

headerButton.addEventListener('click', () => {
    headerList.classList.toggle("header__active")
});