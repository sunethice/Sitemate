export function Dialog(btnElement, msgVal, yesCallback, noCallback) {
  //   const btn = btnElement.querySelectorAll(".star");
  btnElement.addEventListener("click", function (event) {
    showDialog(msgVal);
  });

  function showDialog(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = "";
    var result = confirm(message); //"Are you sure?");

    if (result) {
      yesCallback();
    } else {
      noCallback();
    }
  }
}
