//FAQ Panels
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    this.parentElement.classList.toggle('active');

    let panel = this.nextElementSibling;

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
// -----------
// smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
// -----------
// Info on hover over paint icon
const testhover = document.getElementById('test');
const paintsvg = document.getElementById('paintsvg');

paintsvg.addEventListener('mouseover', e => {
  testhover.style.display = 'block';
  testhover.style.top = e.clientY - 30 + 'px';
  testhover.style.left = e.clientX - 150 + 'px';
});
paintsvg.addEventListener('mouseleave', () => {
  setTimeout(() => {
    testhover.style.display = 'none';
  }, 50);
});
const paintsvg2 = document.getElementById('paintsvg2');

paintsvg2.addEventListener('mouseover', e => {
  testhover.style.display = 'block';
  testhover.style.top = e.clientY - 30 + 'px';
  testhover.style.left = e.clientX - 150 + 'px';
});
paintsvg2.addEventListener('mouseleave', () => {
  setTimeout(() => {
    testhover.style.display = 'none';
  }, 50);
});
// -----------
// Hamburger menu
window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_nav = document.querySelector('.mobile_nav');
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
  });
};
