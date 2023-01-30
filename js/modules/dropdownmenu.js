import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  // eslint-disable-next-line no-unused-vars
  function handleClick(event) {
    event.preventDefault();
    event.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });

    dropdownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  }
}
