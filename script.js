// Imported js from exo odin

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
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', testR);