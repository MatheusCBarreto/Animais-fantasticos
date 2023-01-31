import ScrollSuave from './modules/scroll-suave.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdownmenu.js';
import initOutSideClick from './modules/outsideclick.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initOutSideClick();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaNumeros();
initAnimacaoScroll();
