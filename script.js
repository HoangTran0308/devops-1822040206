document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("btn");
  var message = document.getElementById("message");
  var count = 0;

  btn.addEventListener("click", function () {
    count += 1;
    message.textContent = "Bạn đã bấm " + count + " lần. Website được deploy tự động bằng GitHub Actions!";
  });
});
