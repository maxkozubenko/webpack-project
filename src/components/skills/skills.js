console.log('Skills block');

/* eslint-disable indent */
const arrColors = ['red', 'blue', 'yellow', 'orange'];
// let index = 0;

fetch('./story/skills.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setTimeout(() => {
      const skills = document.querySelector('.skills-block');
      json.skills.forEach((element, i) => {
        const selectorByColor = 'skills__item_' + arrColors[i];
        skills.insertAdjacentHTML(
          'beforeend',
          `<div class="skills__item ${selectorByColor}">
              ${element.nameSkill}
          </div>`
        );
      });

      const loader = document.querySelector('.lds-spinner');
      loader.style.display = 'none';
    }, 2000);
  });
