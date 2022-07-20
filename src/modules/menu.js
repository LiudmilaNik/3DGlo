" use strict";

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  // const closeBtn = menu.querySelector(".close-btn");
  // const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    // if (!menu.style.transform) {
    //   menu.style.transform = `translateX(0)`;
    // } else {
    //   menu.style.transform = ``;
    // }
    menu.classList.toggle("active-menu");
    document.body.style.overflow = "hidden";
  };

  menuBtn.addEventListener("click", handleMenu);
  // closeBtn.addEventListener("click", handleMenu);

  // menuItems.forEach((menuItem) =>
  //   menuItem.addEventListener("click", handleMenu)
  // );

  menu.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      e.target.matches(".close-btn") ||
      e.target.matches("ul>li>a") ||
      !e.target.closest(".menu")
    ) {
      menu.classList.toggle("active-menu");
      document.body.style.overflow = "";
    }
    // return;
    // else if (!e.target.classList.contains("active-menu")) {
    //   menu.classList.remove("active-menu");
    // }
  });
};

export default menu;
