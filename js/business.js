// ==========================
// ファインなどの製品紹介
// ==========================

// Q&Aの出し入れ

const qa1btn = document.querySelector('#js-qa1-button');
const qa1ans = document.querySelector('#js-qa1-ans');

qa1btn.addEventListener('click', function () {
    qa1ans.classList.toggle('closed');
    qa1btn.classList.toggle('open')
});

const qa2btn = document.querySelector('#js-qa2-button');
const qa2ans = document.querySelector('#js-qa2-ans');

qa2btn.addEventListener('click', function () {
    qa2ans.classList.toggle('closed');
    qa2btn.classList.toggle('open')
});

const qa3btn = document.querySelector('#js-qa3-button');
const qa3ans = document.querySelector('#js-qa3-ans');

qa3btn.addEventListener('click', function () {
    qa3ans.classList.toggle('closed');
    qa3btn.classList.toggle('open')
});

const qa4btn = document.querySelector('#js-qa4-button');
const qa4ans = document.querySelector('#js-qa4-ans');

qa4btn.addEventListener('click', function () {
    qa4ans.classList.toggle('closed');
    qa4btn.classList.toggle('open')
});

const qa5btn = document.querySelector('#js-qa5-button');
const qa5ans = document.querySelector('#js-qa5-ans');

qa5btn.addEventListener('click', function () {
    qa5ans.classList.toggle('closed');
    qa5btn.classList.toggle('open')
});