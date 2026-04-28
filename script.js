
// light mode toggle
const modeToggle = document.querySelector('.mode-toggle');
const modeimg = document.querySelector('.mode-img');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (modeimg.getAttribute('src') === 'assets/img/sun.png') {
        modeimg.src = 'assets/img/moon.png';
    } else {
        modeimg.src = 'assets/img/sun.png';
    }

});