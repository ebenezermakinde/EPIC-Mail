// Variable declaration: Mailbox.
const composeMessage = document.querySelector('#compose-draft');
const table = document.querySelector('.table');
const rows = document.querySelectorAll('tr[data-href]');

// Add an event listener to the document on complete load
document.addEventListener('DOMContentLoaded', () => {
  composeMessage.style.display = 'none';

  rows.forEach((row) => {
    row.addEventListener('click', () => {
      window.location.href = row.dataset.href;

      composeMessage.style.display = 'block';
      table.style.display = 'none';
    });
  });
});
