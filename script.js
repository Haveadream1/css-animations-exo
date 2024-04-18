// Imported js from exo odin

// Popup JS
const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

const toggleModal = () => {
    const modalDiv = document.querySelector('.popup-modal');
    const backDrop = document.querySelector('.backdrop');

    modalDiv.classList.add('show');
    backDrop.classList.add('show');

}

const testR = () => {
    const modalDiv = document.querySelector('.popup-modal');
    const backDrop = document.querySelector('.backdrop');

    backDrop.classList.remove('show');
    modalDiv.classList.add('back');
    modalDiv.classList.remove('show');
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', testR);

// Dropdown JS
const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible")
  }
})