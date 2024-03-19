import { isValidColors } from './colors';

export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  let color = words.toLowerCase();

  color = color.replace(/\s/g, '');

  if (!isValidColors(color)) return;

  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log(colorSpan);
  console.log('This is a valid color!');
  console.log(color);

  document.body.style.backgroundColor = color;
}
