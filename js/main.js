//set inicial count = 0;
let number = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      number--;
    } else if (styles.contains("increase")) {
      number++;
    } else {
      number = 0;
    }
    value.textContent = number;
  });
});
