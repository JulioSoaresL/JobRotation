const mes = require('../docs/dados.json')
const valor = [];
let media = 0, soma = 0, cont = 0

for(price in mes){
    valor.push(mes[price].valor)
}

function retira(i) {
    return i != 0
}

let filtrado = valor.filter(retira)
var min = Math.min.apply(Math, valor), max = Math.max.apply(Math, valor)

filtrado.forEach(item => {
    media = (soma+=item)/mes.length
});

for (let i = 0; i < filtrado.length; i++) {
    if (filtrado[i] > media) {
        cont++
    }
    
}

console.log(`O valor minimo de faturamento foi ${min} \nO valor maximo de faturamento foi ${max}\nO Faturamento ficou acima da média mensal em ${cont} dias do mês atual`)
