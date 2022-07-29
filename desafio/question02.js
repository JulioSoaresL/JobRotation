const readline = require('readline-sync');
const numero = readline.question("Aguardando numero: \n");

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (var i = 2; i < 100; i++) {   
    var teste = false;
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    if (fibonacci[i] == numero) {
        teste = true;
        break;
    }
}
console.log(teste == true ? `O numero ${numero} está contido na sequência` : `O numero ${numero} não está contido na sequência`);        