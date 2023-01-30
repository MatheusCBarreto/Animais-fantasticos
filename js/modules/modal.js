export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-button="fechar"]');
  const conteinerModal = document.querySelector('[data-modal="conteiner"]');

  function abrirModal(event) {
    event.preventDefault();
    conteinerModal.classList.add('ativo');
  }

  function fecharModal(event) {
    event.preventDefault();
    conteinerModal.classList.remove('ativo');
  }

  function cliqueForaModal(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && conteinerModal) {
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    conteinerModal.addEventListener('click', cliqueForaModal);
  }
}
