import {Financiamento} from './financiamento'


const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular'); 
const textoValor = document.querySelector('#textoValor'); 
const textoEntrada = document.querySelector('#textoEntrada'); 
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');

comCarencia.addEventListener('change', function() {
    if(this.checked) {
        listaSuspensa.removeAttribute('hidden')
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
})

botaoCalcular.addEventListener('click', function() {
    const valor = parseFloat(textValor.value);
    const entrada = parseFloat(textEntrada.value);
    const taxajuros = parseFloat(textTaxaJuros.value);
    const prazo = parseFloat(textPrazo.value);
    let simulacao;
    simulacao = new Financiamento (valor,entrada,taxaJuros,prazo);
    simulacao.calcParcelasMensais()
    simulacao.exibeParcelas();
});