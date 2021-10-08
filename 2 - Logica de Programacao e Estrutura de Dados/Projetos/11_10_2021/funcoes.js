let pecas = []

//Consultando arquivo JSON
const consultar = () => {
    return new Promise((resolve, reject) => {
        fetch('catalogo.json')
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

Array.prototype.sumField = function (campo) {
    return this.map(m => m[campo]).reduce((acumulador, atual) => acumulador + atual, 0)
}

const calcularTotal = (listaCalcular) =>
    listaCalcular.sumField('ValorMedio')

const zerarPecas = (total) => {
    if (total === 0)
        return 0

    return zerarPecas(total - 1)
}

consultar()
    .then(pecas => {
        let pecasMotor = pecas.filter(f => f.Motor).map(i => ({ ...i, NomeCompleto: i.NomeDescricao() }))
        console.log(`Peças do motor:`)
        console.table(pecasMotor)
        let totalPecasMotor = calcularTotal(pecasMotor)
        console.log(`Valor total das peças motor: ${totalPecasMotor}`)
        const idsUtilizar = [2, 6, 8, 9]
        const pecasEspecificas = pecas.filter(f => idsUtilizar.includes(f.Id))
        console.log('Peças especifícas:')
        console.table(pecasEspecificas)
        console.log(`Zerar valor das peças utilizando recursividade: ${zerarPecas(totalPecasMotor)}`)
        console.log('-------- CRUD ABAIXO --------')
        console.log('Inserir dado(via push):')
        pecasMotor.push({ Id: 21, Nome: 'Carburador', Descricao: 'Peça responsável por controlar a injeção de combustível', Motor: true, ValorMedio: 100 })
        console.table(pecasMotor)
        console.log('Ler dado:')
        let objetoAlterar = pecasMotor.find(f => f.Id === 21)
        console.log(objetoAlterar)
        console.log('Alterar dado: ')
        objetoAlterar.Nome = 'Carburador Alterado'
        console.table(pecasMotor)
        console.log('Remover item da lista:')
        pecasMotor.splice(pecasMotor.indexOf(objetoAlterar, 1))
        console.table(pecasMotor)
    })






