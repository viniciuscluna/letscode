let pecas = []

//Consultando arquivo JSON
const consultar = () => {
    return new Promise((resolve, reject) => {
        fetch('cardapio.json')
            .then(resp => resp.json())
            .then(data => {
                data.forEach(i => {
                    i.NomeDescricao = function () {
                        return `${this.Nome}: ${this.Descricao}`
                    }
                });
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
    })

}

Array.prototype.sumField = (lista, campo) => {
    return lista.map(m => m[campo]).reduce((acumulador, atual) => acumulador + atual, 0)
}

const calcularTotal = (listaCalcular) =>
    listaCalcular.sumField(listaCalcular, 'ValorMedio')

const zerarPecas = (total) => {
    if (total === 0)
        return 0

    return zerarPecas(total - 1)
}

consultar()
    .then(pecas => {
        const pecasMotor = pecas.filter(f => f.Motor).map(i => ({...i}))
        console.log(`Peças do motor:`)
        console.table(pecasMotor.map(i => (Id = i.Id, NomeCompleto = i.NomeDescricao())))
        let totalPecas = calcularTotal(pecas)
        console.log(`Valor total das peças: ${totalPecas}`)
        console.log(`Zerar valor das peças utilizando recursividade: ${zerarPecas(totalPecas)}`)
    })






