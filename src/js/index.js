/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
  - passo 3 - fazer aparecer o próximo cartão da lista 
  - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
  - passo 4 - buscar o cartão que esta selecionado e esconder
*/

// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
// cartao da lista
//   - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar

// pegar os elementos necessários
const botaoAvancar = document.getElementById("btn-avancar");
const botaoVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// função que remove o cartão atualmente selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

// função que mostra o cartão com base no índice
function mostrarCartao(indice) {
  cartoes[indice].classList.add("selecionado");
}

// função que troca o cartão para frente ou para trás
function trocarCartao(direcao) {
  const proximoIndice = cartaoAtual + direcao;

  // impedir que o índice saia dos limites da lista
  if (proximoIndice < 0 || proximoIndice >= cartoes.length) return;

  esconderCartaoSelecionado();
  cartaoAtual = proximoIndice;
  mostrarCartao(cartaoAtual);
}

// configurar os botões com os eventos
botaoAvancar.addEventListener("click", () => trocarCartao(1));
botaoVoltar.addEventListener("click", () => trocarCartao(-1));



