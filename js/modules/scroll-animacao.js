export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-scroll="scroll"]');

  const windowMetade = window.innerHeight * 0.6;
  sections[0].classList.add('ativo');
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTopo = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTopo - windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    window.addEventListener('scroll', animaScroll);
  }
}
