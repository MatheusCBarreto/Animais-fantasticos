import outsideclick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.getElementById('#buttonMenu');
  const menuList = document.getElementById('#menu');
  const eventos = ['click', 'touchstart'];

  // eslint-disable-next-line no-unused-vars
  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');

    outsideclick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });

    if (menuButton) {
      eventos.forEach((evento) => {
        menuButton.addEventListener(evento, openMenu);
      });
    }
  }
  openMenu();
}
