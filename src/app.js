import './style.css';
import { gameGenerator, refresh, submit } from './index.js';

const projectToken = gameGenerator();

const refreshbutton = document.querySelector('#refresh');
const table = document.querySelector('#table');
const submitButton = document.querySelector('#submit')
const nameInput = document.querySelector('#nameInput');
const scoreInput = document.querySelector('#scoreInput');

refreshbutton.addEventListener('click', (e) => {
  e.preventDefault();
  refresh(projectToken, table);
});