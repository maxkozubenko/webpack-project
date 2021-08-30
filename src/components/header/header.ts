console.log('header block');

const iconToggle = document.querySelector('.icon');
const menu = document.querySelector('.menu');

iconToggle.addEventListener('click', () => {
  iconToggle.classList.toggle('open');
  menu.classList.toggle('hidden');
  console.log('work');
});
