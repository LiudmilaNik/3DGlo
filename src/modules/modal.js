" use strict";
import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");

  const openModal = () => {
    modal.style.display = "block";
  };

  const opacityMolal = () => {
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        popupContent.style.opacty = progress;
      },
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const clientWidthScreen = screen.width;

      if (clientWidthScreen > 768) {
        openModal();
        // modal.style.display = "block";
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.opacity = progress;
          },
        });
      } else {
        openModal();
        // modal.style.display = "block";
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
