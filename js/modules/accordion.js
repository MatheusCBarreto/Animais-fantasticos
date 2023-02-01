export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
  return this;
}
