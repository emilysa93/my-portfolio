// DOM Elements
const modals = {
  info: document.getElementById("info-modal"),
  skills: document.getElementById("skills-modal"),
  lang: document.getElementById("lang-modal"),
};

const buttons = {
  info: document.querySelector(".info"),
  skills: document.querySelector(".skills"),
  lang: document.querySelector(".lang"),
};

const closeButtons = document.querySelectorAll(".close-btn");

// Functions
const openModal = (modalId) => {
  modals[modalId].classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
};

const closeModal = (modal) => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
};

const closeAllModals = () => {
  Object.values(modals).forEach((modal) => closeModal(modal));
};

// Event Listeners
buttons.info.addEventListener("click", () => openModal("info"));
buttons.skills.addEventListener("click", () => openModal("skills"));
buttons.lang.addEventListener("click", () => openModal("lang"));

closeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    closeModal(modal);
  });
});

// Close modal when clicking outside
// window.addEventListener('click', (e) => {
//   Object.values(modals).forEach(modal => {
//     if (e.target === modal) {
