export const escolherPalavraAleatoria = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const verificarLetraForca = (letra, palavraEscolhida, palavraDecrifrada, letrasJaEscolhidas) => {
    if (palavraDecrifrada.includes(letra) || letrasJaEscolhidas.includes(letra)) {
        return {
            Sucesso: false,
            Mensagem: 'Letra já escolhida!!'
        }
    }
    else if (palavraEscolhida.includes(letra)) {
        inserirLetraForca(letra, palavraEscolhida, palavraDecrifrada)
        return {
            Sucesso: true,
            Mensagem: `Letra (${letra}) encontrada!`
        }
    }
    else {
        letrasJaEscolhidas.push(letra)
        return {
            Sucesso: false,
            Mensagem: `Letra (${letra}) não encontrada :(`
        }
    }
}

export const validarLetraForca = (letra) => {
    if (letra) {
        const regexAlfabeto = /[a-zA-Z]*$/g
        if (regexAlfabeto.test(letra) && letra.split('').length === 1) {
            return true
        }
        return false
    }
    console.log('Letra inválida')
    return false
}
const inserirLetraForca = (letra, palavraEscolhida, palavraDecrifrada) => {
    palavraEscolhida.forEach((letraIdx, idx) => {
        if (letraIdx == letra) {
            palavraDecrifrada[idx] = letraIdx
        }
    })
}