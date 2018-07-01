"use strict"
// кнопка, при нажатии на которую появляется форма
var link = document.querySelector(".address__button");
// переменная для модального окна
var popup = document.querySelector(".write");
// событие клика при нажатии на кнопку
// кнопка закрытия модального окна
var close = popup.querySelector(".button-close");
// поле ввода имени в форме
var name = popup.querySelector("[name=name]");
// переменная для формы
var form = popup.querySelector("write-form");
var email = popup.querySelector("[name=email]");
// хранилище для других браузеров
var isStorageSupport = true;
var storage = "";

try {
 storage = localStorage.getItem("name");
} catch (err) {
 isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  // добавляем класс показа при клике на ссылку
  popup.classList.add("write-show");
  // фокус в поле имени при открытии окна
  if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
});

//закрытие модального окна
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-show");
  popup.classList.remove("write-error");
});
// событие оправки формы
form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("write-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
  // запись в локальное хранилище
});
// выход при нажатии кнопки esc
window.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
   evt.preventDefault();
   if (popup.classList.contains("write-show")) {
     popup.classList.remove("write-show");
     popup.classList.remove("write-error");
   }
 }
});
