export function Dialog(btnElement, msgVal, yesCallback, noCallback) {
  btnElement.addEventListener("click", function (event) {
    showDialog(msgVal);
  });

  function showDialog(message) {
    var result = confirm(message);
    if (result) {
      yesCallback();
    } else {
      noCallback();
    }
  }
}
