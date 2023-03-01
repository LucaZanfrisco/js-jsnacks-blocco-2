'use strict';
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


let somma = 0;
for(let i = 0; i < 5 ; i++){
    const num = Number(prompt('Inserire un numero'));
    somma += num;
}
console.log('La somma è: ' + somma);

somma = 0;
let i = 0;
while(i < 5){
    const num = Number(prompt('Inserire un numero'));
    somma +=num;
    i++;
}
console.log('La somma è: ' + somma);