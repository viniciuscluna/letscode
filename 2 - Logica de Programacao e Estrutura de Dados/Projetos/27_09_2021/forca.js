import { escolherPalavraAleatoria, validarLetraForca, verificarLetraForca } from './funcoes.js'


let listaPalavras = []
let letrasJaEscolhidas = []
let palavraEscolhida = []
let qtdCaracteres = 0
let letrasEscolhidas = []
let palavraDecrifrada = []

fetch('animais.txt')
    .then(response => response.text())
    .then(text => {
        listaPalavras = text.split('\n')
        letrasJaEscolhidas = []
        palavraEscolhida = listaPalavras[escolherPalavraAleatoria(0, listaPalavras.length)]
        qtdCaracteres = palavraEscolhida.length
        letrasEscolhidas = palavraEscolhida.split('')
        palavraDecrifrada = letrasEscolhidas.map(() => "_")
    })


const btnIniciar = document.getElementById('btnIniciar')
const txtForca = document.getElementById('txtForca')
const alerta = document.getElementById('mensagemAlerta')
const usuario = document.getElementById('msgUsuario')

usuario.innerText = `Olá : ${prompt('Digite seu nome:')}` 

btnIniciar.onclick = () => {
    CarregarForca()
    txtForca.focus()
    txtForca.style = ''
    btnInserir.style = ''
}

const btnInserir = document.getElementById('btnInserir')

btnInserir.onclick = () => {
    InserirValor()
    RecarregarCampos()
    txtForca.value = ''
    txtForca.focus()
    VerificarVencimento()
}
const InserirValor = () => {
    const letra = txtForca.value
    if (validarLetraForca(letra)) {
        var resultado = verificarLetraForca(letra.toUpperCase(), letrasEscolhidas, palavraDecrifrada, letrasJaEscolhidas)
        alerta.innerText = resultado.Mensagem
    }
    else {
        alerta.innerText = 'Caractere inválido'
    }
}

const RecarregarCampos = () => {
    document.getElementById('mensagem').innerText = `Sua animal tem ${qtdCaracteres} letras!`
    document.getElementById('mensagemForca').innerText = `Sua forca nesse momento: ${palavraDecrifrada.join(' ')}`
    document.getElementById('mensagemForcaEscolhidas').innerText = `Letras não encontradas: ${letrasJaEscolhidas.join(',')}`
}

const CarregarForca = () => {
    palavraEscolhida = listaPalavras[escolherPalavraAleatoria(0, listaPalavras.length)].toUpperCase().replace('\r','')
    qtdCaracteres = palavraEscolhida.length
    letrasEscolhidas = palavraEscolhida.split('')
    palavraDecrifrada = letrasEscolhidas.map(() => "_")
    letrasJaEscolhidas = []
    RecarregarCampos()
    alerta.innerHTML = "Insira uma letra abaixo e clique em 'Verificar Letra'!"
}
const gerarTextoFinal = (texto) => {
    let retorno = ''
    for (let t of texto) {
        retorno = retorno + `\n => ${t}`
    }
    return retorno
}
const VerificarVencimento = () => {
    if (JSON.stringify(letrasEscolhidas) === JSON.stringify(palavraDecrifrada)) {
        alert(`Você venceu!!\n A Palavra é (${palavraEscolhida}): ${gerarTextoFinal(palavraDecrifrada)}`)
        CarregarForca()
        txtForca.style = 'display:none'
        btnInserir.style = 'display:none'
        document.getElementById('mensagem').innerText = ``
        document.getElementById('mensagemForca').innerText = ``
        document.getElementById('mensagemForcaEscolhidas').innerText = ``
        alerta.innerHTML = 'Renicie o jogo clicando acima'
    }
}






