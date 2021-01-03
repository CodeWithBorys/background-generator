const gradientName = document.querySelector('h3');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('body');
const randomColor = document.querySelector('button');
console.log(body.style.background)

function gradientUpdate() {
  gradientName.innerText = `linear-gradient(to right, ${color1.value}, ${color2.value})`
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColorGenerator() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  gradientUpdate();
}

color1.addEventListener("input", gradientUpdate)

color2.addEventListener("input", gradientUpdate)

randomColor.addEventListener('click', randomColorGenerator)

gradientUpdate()