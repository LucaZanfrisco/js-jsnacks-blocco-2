'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ['luca','marco','mattia']
const cognomi = ['pippo','paperino','topolino'];

let  nomeRandom;
let cognomeRandom;
const lista = [];


for(let i = 0; i < 3; i++){
    nomeRandom = nomi[Math.floor(Math.random() * nomi.length)];
    cognomeRandom = cognomi[Math.floor(Math.random() * nomi.length)]; 
    const fullName = `${nomeRandom} ${cognomeRandom}`; 
    lista.push(fullName);
}

console.log(lista);




