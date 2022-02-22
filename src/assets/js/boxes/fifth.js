export const fifth = () => {
  const wheel = document.querySelector(".fifth__wheel");
  const btn = document.querySelector(".fifth__button");

  btn.addEventListener("click", (e) => {
    let deg = randomNum(370, 3600);
    let sec = randomNum(3, 7);

    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.style.transitionDuration = `${sec}s`;
    e.target.disabled = true;

    setTimeout(() => {
      reset(e, wheel);
    }, sec * 1000);
  });
};

function reset(e, wheel) {
  wheel.style.transitionDuration = "0s";
  e.target.disabled = false;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
