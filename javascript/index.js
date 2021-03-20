document.body.classList.add(localStorage.getItem("pageColor") || "red");
let lis = document.querySelectorAll(".color-switcher li");
let classList = [];

for (let i = 0; i < lis.length; i++) {
  classList.push(lis[i].getAttribute("data-color"));
  lis[i].addEventListener(
    "click",
    function () {
      document.body.classList.remove(...classList);
      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("pageColor", this.getAttribute("data-color"));
    },
    false
  );
}

console.log(localStorage.getItem("pageColor"));
