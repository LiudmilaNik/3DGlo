" use strict";

const valid = () => {
  const calcItem = document.querySelectorAll(".calc-item");
  const yourName = document.querySelectorAll('[placeholder="Ваше имя"]');
  const yourMessage = document.querySelectorAll(
    '[placeholder="Ваше сообщение"]'
  );
  const typeEmail = document.querySelectorAll('[type="email"]');
  const typeTel = document.querySelectorAll('[type="tel"]');

  console.log(calcItem);
  console.log(yourName);
  console.log(yourMessage);
  console.log(typeEmail);

  calcItem.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });

  yourName.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/gi, "");
    });
  });

  yourName.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/\-{2,}/g, "-");
    });
  });

  yourName.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/\s{2,}/g, "");
    });
  });

  yourName.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/[\s\-]+$/g, "");
    });
  });

  yourName.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/^[\s\-]/g, "");
    });
  });

  yourName.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    });
  });

  yourMessage.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/gi, "");
    });
  });

  typeEmail.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-\.\!\~\*\']/gi, "");
    });
  });

  typeTel.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\-\(\)]/gi, "");
    });
  });

  typeTel.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/\-{2,}/g, "-");
    });
  });

  typeTel.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/\-+$/g, "");
    });
  });

  typeTel.forEach((item) => {
    item.addEventListener("blur", (e) => {
      e.target.value = e.target.value.replace(/^\-/g, "");
    });
  });
};

export default valid;
