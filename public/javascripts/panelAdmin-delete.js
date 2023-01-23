const openModalButton = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButton.forEach(ele => {
  ele.addEventListener("click", () => toggleModal())
})

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});