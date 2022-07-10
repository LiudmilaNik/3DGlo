" use strict";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  let idInterval;

  //   buttons.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       modal.style.display = "block";
  //     });
  //   });

  const openModal = () => {
    modal.style.display = "block";
    clearInterval(idInterval);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const clientWidthScreen = screen.width;

      if (clientWidthScreen > 768) {
        //   openModal();
        //   modal.style.display = "block";
        idInterval = setInterval(openModal, 500);
      } else {
        modal.style.display = "block";
        clearInterval(modal);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
