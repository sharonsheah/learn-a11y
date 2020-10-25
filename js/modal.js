var modal        = document.querySelector('.focus-modal');
var modalButton  = document.querySelector('.focus-modal-button');
var modalOverlay = document.querySelector('.focus-modal-overlay');
var cancelButton = document.querySelector('.focus-modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);

// Get a list of tabbable elements here:
// https://github.com/jkup/focusable


function open() {
  const previouslyFocused = document.activeElement;

  const focusableElements= modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled], buttom:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');
  modal.addEventListener('keydown', trap);
  focusableElements = Array.prototype.slice(focusableElements);

  const firstItem = focusableElements[0];
  const lastItem = focusableElements[-1];

  // Show the modal and overlay
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';

  function trap(event) {
    if (event.keyCode === 9) {
      // Shift is held down
      if (event.shiftKey) {
        // Backwards
        if (document.activeElement === firstItem) {
          lastItem.focus();
        }
      } else {
        // Forwards
        if (document.activeElement === lastItem) {
          firstItem.focus();
        }
      }
    }
  }
}

function close() {
  // Hide the modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
