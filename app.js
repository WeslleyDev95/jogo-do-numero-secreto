let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rete:1.2});
}

function exiberMensInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

exiberMensInicial();

function verificarChute() {
    let chute = document.querySelector ('input') .value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa" ;
        let mensTentativas = `Você descobriu o numero com ${numeroTentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p', mensTentativas);

        document.getElementById ('reiniciar').removeAttribute('disabled');


    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Errooooou!');
            exibirTextoNaTela('p', 'O numero é menor');
        } else {
            exibirTextoNaTela('h1', 'Errooooou!');
            exibirTextoNaTela('p', 'O numero é maior');
        }
        numeroTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let qntdDeNumerosNaLista = listaDeNumeroSorteados.length;

    if (qntdDeNumerosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    // O jogo reinicia com as mesmas variaveis, e com as funcões para zera o jogo
    numeroSecreto = gerarNumeroAleatorio();
    numeroTentativas = 1;
    limparCampo();
    exiberMensInicial();
    document.getElementById ('reicinicar') .setAttribute('disabled' , true);
}