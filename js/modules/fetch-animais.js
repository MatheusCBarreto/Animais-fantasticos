import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {}

async function fetchAnimais(url) {
  function createAnimais(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numeros>${animal.total}</span>`;
    return div;
  }

  try {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');

    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimais(animal);
      numerosGrid.appendChild(divAnimal);
    });
  } catch (erro) {
    console.log(erro);
  }
}

fetchAnimais('./animaisapi.json');

initAnimaNumeros();
