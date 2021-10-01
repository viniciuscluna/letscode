
const objInicio = {
    Nome: 'Vinicius',
    Idade: 22,
    Calculo: function(){
        return this.Idade
    },
    CalculoArrow: () => (objInicio.Idade)
}

var obj2 = objInicio.Calculo.bind(objInicio)
var obj3 = objInicio.CalculoArrow.call(objInicio)
console.log(obj2())
console.log(obj3)