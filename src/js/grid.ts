// import '@/styles/grid.scss';

// import {} from '@/components/header/header';

import '../styles/grid.scss';

import '../components/header/header';

interface ITechnology {
  technology: string;
  createdData: Date;
}

fetch('./static-data/techologies.json')
  .then((response) => response.json())
  .then((json) => {
    json.technologies.sort((a: ITechnology, b: ITechnology) => {
      return +new Date(a.createdData) - +new Date(b.createdData);
    });

    const gridBlock = document.querySelectorAll('.flex__picture');

    for (let i = 0; i < gridBlock.length; i++) {
      gridBlock[i].insertAdjacentHTML(
        'afterbegin',
        `<div class="item">
              <h2>${json.technologies[i].technology}</h2>
              <p>Created at ${json.technologies[i].createdData}</p>
            </div>`
      );
    }
  });
