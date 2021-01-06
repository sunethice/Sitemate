export function Dialog(btnElement) {
  //   const btn = btnElement.querySelectorAll(".star");
  btnElement.addEventListener("click", function (event) {
    showDialog("Are you sure you want to continue?");
  });

  function showDialog(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = "";
    var result = confirm(message); //"Are you sure?");

    if (result) {
      messageDiv.innerHTML = "You just clicked Yes";
    } else {
      messageDiv.innerHTML = "You just clicked Cancel";
    }
  }
}
