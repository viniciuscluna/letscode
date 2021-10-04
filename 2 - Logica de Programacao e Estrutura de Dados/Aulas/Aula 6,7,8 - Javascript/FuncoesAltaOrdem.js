const obj = [
    { Nome: 'A' },
    { Nome: 'B' },
    { Nome: 'C' },
    { Nome: 'D' }
]

const getCustom = function (n) {
    return function (a) {
        console.log(this)
        return a.Nome === n
    }
}
Array.prototype.find = function() { return console.log }
console.log(obj.find('Ola'))