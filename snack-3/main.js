'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ['luca','marco','mattia']
const cognomi = ['pippo','paperino','topolino'];

const nomeRandom = nomi[Math.floor(Math.random() * nomi.length)];
const cognomeRandom = cognomi[Math.floor(Math.random() * nomi.length)];

console.log(`${nomeRandom} ${cognomeRandom}`);

