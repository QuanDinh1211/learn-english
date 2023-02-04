const modalContainerElement = document.querySelector(".modal-container");
const formContainerElement = document.querySelector(".register-form-container");
const iconTimesElement = document.querySelector(".icon-times");
const btnElement = document.querySelectorAll(".btn-container");

const handleCloseModal = () => {
  modalContainerElement.classList.add("display-none");
  modalContainerElement.classList.remove("display-block");
};

modalContainerElement.onclick = () => {
  handleCloseModal();
};

formContainerElement.onclick = (event) => {
  event.stopPropagation();
};

iconTimesElement.onclick = () => {
  handleCloseModal();
};
btnElement.forEach((btn) => {
  btn.onclick = () => {
    modalContainerElement.classList.add("display-block");
    modalContainerElement.classList.remove("display-none");
  };
});
