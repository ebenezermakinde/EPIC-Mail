const selectBox = document.querySelector('.selectBox');
const checkBoxes = document.querySelector('#checkBoxes');
let expanded = false;


selectBox.addEventListener('click', () => {
  if (!expanded) {
    checkBoxes.style.display = 'block';
    expanded = true;
  } else {
    checkBoxes.style.display = 'none';
    expanded = false;
  }
});

// Source: https://stackoverflow.com/questions/17714705/how-to-use-checkbox-inside-select-option.
