import { Dialog } from "./dialog.js";

let messageDiv = document.getElementById("message");
function onYesClick() {
  messageDiv.innerHTML = "You just clicked Yes";
}

function onCancelClick() {
  messageDiv.innerHTML = "You just clicked Cancel";
}

document.addEventListener("DOMContentLoaded", function () {
  const clickBtns = document.querySelectorAll("[role=clickBtn]");
  clickBtns.forEach((btn) => {
    let messageVal = btn.getAttribute("clickMessage");
    new Dialog(btn, messageVal, onYesClick, onCancelClick);
  });
});
