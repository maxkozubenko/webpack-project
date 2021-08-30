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

    const flexBlock = document.querySelector('.flex');

    for (let i = 0; i < json.technologies.length; i++) {
      flexBlock.insertAdjacentHTML(
        'afterbegin',
        `<div class="item">
        <h2>${json.technologies[i].technology}</h2>
        <p>Created at ${json.technologies[i].createdData}</p>
      </div>`
      );
    }
  });
