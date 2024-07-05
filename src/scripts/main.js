'use strict';

const tree = document.querySelector('.tree');

const lists = document.querySelectorAll('li');

lists.forEach((list) => {
  const title = list.firstChild;

  if (title.nextSibling) {
    const span = document.createElement('span');

    span.textContent = title.nodeValue;

    title.textContent = '';
    list.prepend(span);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.nodeName === 'SPAN') {
    const ul = e.target.nextElementSibling;

    ul.classList.toggle('hidden');
    ul.style.display = ul.classList.contains('hidden') ? 'none' : 'block';
  }
});
