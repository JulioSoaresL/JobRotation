const readline = require('readline-sync')
const palavra = readline.question("Palavra a ser invertida: \n")

function revPalavra(txt) {
    var rev = "";

    for (var i = txt.length - 1; i >= 0; i--) { 
        rev += txt[i];
    }
    return rev;
}
 
console.log(revPalavra(palavra));