export default function initFetchBitcoin() {}

fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((bitcoin) => {
    const bitcoinPreco = document.querySelector('.btc-preco');

    bitcoinPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
  })
  .catch((erro) => {
    console.log(Error(erro));
  });
