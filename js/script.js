const layoutScreen = document.querySelector('.js-layout-screen');
const mainScreen = document.querySelector('.js-main-screen');
const soundBlock = document.querySelector('.sound-block');
const form = document.querySelector('#form1');
const input = document.querySelector('.js-input');
const resultWrapper = document.querySelector('.result__wrapper');
const resultMessages = document.querySelector('.result__messages');
const loaderMessage = document.querySelector('.js-message');
const answer = document.querySelector('.answer');
const progressBar = document.querySelector('.js-progress');
const result = document.querySelector('.result-message');
// const brainImg = document.querySelector('.brain-img');

const message = {
  text1: 'Анализирую мозговые волны',
  text2: 'Сканирую память предков',
  text3: 'Вычисляю вероятность',
  text4: 'Расшифровываю поток мыслей',
};

const messages = [message.text1, message.text2, message.text3, message.text4];
let index = 0;


// Listeners
window.addEventListener('keydown', startApp);
form.addEventListener('submit', startForm);

// Functions

function startApp(event) {
  if (event.code === 'Space') {
    mainScreen.style.display = 'flex';
    layoutScreen.style.display = 'none';
		soundBlock.style.display = 'block'
    sound.play();
    window.removeEventListener('keydown', startApp);
  }
}
function startForm(event) {
	event.preventDefault();
  form.style.display = 'none';
  resultWrapper.style.display = 'flex';
  answer.innerText = `${input.value}`;

  displayMessage();
}
function displayMessage() {
  if (index < messages.length) {
    loaderMessage.textContent = messages[index];
    updateProgressBar((index + 1) * 20);
    index++;
    setTimeout(displayMessage, 3000);
  } else {
    loaderMessage.style.display = 'none';
    result.style.display = 'block';
    updateProgressBar(100);
    // brainImg.style.animation = 'none'
  }
}
function updateProgressBar(value) {
  progressBar.style.width = value + '%';
}
