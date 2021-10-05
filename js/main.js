//Функиця открытия закрытия модального окна

function actionModal() {
  const modal = document.querySelector(".modal");
  const buttons = document.querySelectorAll(".button");
  const body = document.querySelector(".page-main");
  const header = document.querySelector(".page-header")

  for (let button of buttons) {
    button.addEventListener("click", function () {
      modal.classList.toggle("modal--hidden");
      body.classList.toggle("page-main__modal");
      header.classList.toggle("page-main__modal");
    });
  }
}

actionModal();

//Функция открытия меню на моб версии

function actionToggleMenu() {
  const buttonMenu = document.querySelector(".main-nav__toggle");
  const menu = document.querySelector(".main-nav");

  buttonMenu.addEventListener("click", function () {
    menu.classList.toggle("page-header__nav--close");
    buttonMenu.classList.toggle("main-nav__toogle--close")
  });
}
actionToggleMenu();
