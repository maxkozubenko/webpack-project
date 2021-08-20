const inputs = document.getElementsByTagName('input');
const btnSubmit = document.querySelector('.contact-form__submit');

btnSubmit.disabled = true;
console.log('here');

// eslint-disable-next-line no-plusplus
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', () => {
    let valueFlag = true;

    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].value === '' || inputs[j].value === null) {
        valueFlag = false;
      }
    }

    if (valueFlag) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  });
}
