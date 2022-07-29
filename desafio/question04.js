const faturamento = require("../docs/estados.json")

function demonstrativo() {
    let total = 0
    for (valor in faturamento) {
        total+=faturamento[valor].faturamento
    }
    faturamento.forEach(i => {
        i.porcentagem = ((i.faturamento/total)*100)
        console.log(`A percentual de representação de ${i.estado} é ${(i.porcentagem).toFixed(2)}%`);
    });
}
demonstrativo();