// Imported js from exo odin

const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

const toggleModal = () => {
    const modalDiv = document.querySelector('.popup-modal');
    const backDrop = document.querySelector('.backdrop');

    modalDiv.classList.toggle('show');
    backDrop.classList.toggle('show');
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);