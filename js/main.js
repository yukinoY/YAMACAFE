'use strict';

{
  const navBtn = document.getElementById('nav-btn');

  navBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('open');
  })
}