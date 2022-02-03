export const third = () => {
  const buttons = document.querySelectorAll(".third__btn");
  const overlay = document.querySelector(".third__overlay");
  const colorFields = document.querySelectorAll(".third__color-field");

  fillCircles();

  for (let button of buttons) {
    button.addEventListener("click", () => {
      overlay.classList.remove("third__overlay--show");
      for (let field of colorFields) {
        field.innerHTML = "";
        field.classList.remove("third__color-field--disable");
      }
      fillCircles();
    });
  }

  function generateColor() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${arr.join()})`;
  }

  function fillCircles() {
    for (let field of colorFields) {
      field.style.backgroundColor = generateColor();
    }
    selectRandomCircle(colorFields);
  }

  function selectRandomCircle(fields) {
    let randomNum = Math.floor(Math.random() * 6);
    let winner = fields[randomNum].style.backgroundColor;
    document.querySelector(".third__color").innerHTML = winner;

    startGame(winner);
  }

  function startGame(winner) {
    document
      .querySelector(".third__container")
      .addEventListener("click", (e) => {
        if (e.target && e.target.matches("div.third__color-field")) {
          if (e.target.style.backgroundColor === winner) {
            overlay.style.backgroundColor = winner;
            overlay.classList.add("third__overlay--show");
          } else {
            e.target.innerHTML = '<span class="third__wrong">X</span>';
            e.target.classList.add("third__color-field--disable");
          }
        }
      });
  }
};
