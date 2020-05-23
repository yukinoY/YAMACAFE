'use strict';

{
  const navBtn = document.getElementById('nav-btn');

  navBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('open');
  });
}

{
  if (!document.currentScript) {
    const ie1 = document.createElement('script');
    ie1.src = 'ie/ofi.min.js';
    document.head.appendChild(ie1);

    const ie2 = document.createElement('script');
    const ie2Text = document.createTextNode('window.onload=function(){objectFitImages();}');
    ie2.appendChild(ie2Text)
    document.head.appendChild(ie2);

    const ie3 = document.createElement('style');
    const ie3Text = document.createTextNode('img {font-family: "object-fit: cover";}');
    ie3.appendChild(ie3Text);
    document.head.appendChild(ie3);
  }
}