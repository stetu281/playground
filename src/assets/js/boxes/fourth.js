export const fourth = () => {
  const circle = document.querySelector(".fourth__circle");
  const circle2 = document.querySelector(".fourth__circle-two");
  const box = document.querySelector(".fourth");
  const inst = document.querySelector(".fourth__inst");
  const headline = document.querySelector(".fourth__headline");

  box.addEventListener("scroll", () => {
    const scroll = box.scrollTop;
    const val = scroll * 0.2;

    if (val > 40) {
      circle.classList.add("fourth__circle--ani");
    } else {
      circle.classList.remove("fourth__circle--ani");
    }

    if (val > 80) {
      circle2.classList.add("fourth__circle-two--ani");
    } else {
      circle2.classList.remove("fourth__circle-two--ani");
    }

    circle.style.transform = `scale(${0 + val})`;
    circle.style.opacity = 0 + val / 10;
    circle2.style.width = `${-50 + val * 4}px`;
    circle2.style.transform = `rotate(${0 + val / 2}deg)`;
    inst.style.transform = `translateX(${0 + val}%)`;
    headline.style.transform = `translateX(${500 - 4 * val}px)`;
  });
};
