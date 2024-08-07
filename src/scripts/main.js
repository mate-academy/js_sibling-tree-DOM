'use strict';

const ul = document.querySelector('ul');
const list = document.querySelectorAll('li');

list.forEach((li) => {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const element = e.target.nextSibling;

    if (element) {
      element.hidden = !element.hidden;
    }
  }
});
