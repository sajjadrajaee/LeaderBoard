import './style.css';
import { gameGenerator, refresh, submit } from './app.js';

gameGenerator();
const token = 'f6sSVN11gCaVNDIQN9By/scores';
const refreshbutton = document.querySelector('#refresh');
const table = document.querySelector('#table');
const submitButton = document.querySelector('#submit');
let nameInput = document.querySelector('#name');
let scoreInput = document.querySelector('#score');

refreshbutton.addEventListener('click', (e) => {
  e.preventDefault();
  refresh(token, table);
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  submit(token, nameInput.value, scoreInput.value);
  nameInput = '';
  scoreInput = '';
});

refresh(token, table);