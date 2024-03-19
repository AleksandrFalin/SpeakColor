import { colorsByLength, isDark } from './colors';
import { startRecognition } from './recognition';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${color} ${
          isDark(color) ? 'dark' : ''
        }" style="background: ${color};">${color}</span>`,
    )
    .join('');
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if (!window.SpeechRecognition) {
    console.log('Sorry your browser does not support speech reco. ');
    return;
  }

  console.log('Starting...');

  startRecognition();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
