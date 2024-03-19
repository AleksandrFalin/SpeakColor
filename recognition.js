import { handleResult } from './handlers';

let recognition;

export function startRecognition() {
  recognition = new window.SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}
