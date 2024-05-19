import headerTpl from "../templates/header.hbs"

const body = document.querySelector("body");
const headerBox = headerTpl();

body.insertAdjacentHTML("afterbegin", headerBox);

console.warn(headerTpl());