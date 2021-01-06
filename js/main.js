import { Dialog } from "./dialog.js";

document.addEventListener("DOMContentLoaded", function () {
  const clickBtns = document.querySelectorAll("[role=clickBtn]");
  clickBtns.forEach((btn) => {
    new Dialog(btn);
  });
});
