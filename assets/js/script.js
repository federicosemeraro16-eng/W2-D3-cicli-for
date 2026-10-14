/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
  nome: "Federico",
  cognome: "Semeraro",
  eta: 34,
  citta: "Massafra",
};

console.log(`${persona.nome}, ${persona.eta} anni, vive a ${persona.citta}`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

persona.email = "federicosemeraro16@gmail.com";

delete persona.eta;

console.log(persona);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utente = {
  nome: "Federico",
  cognome: "Semeraro",
  indirizzo: {
    via: "Giacomo Trizzo,12",
    citta: "Massafra",
    cap: "74016",
  },
};

console.log(utente.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const chiave = persona["nome"];

console.log(chiave);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 50;
let num2 = 150;
let num3 = 50;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num3 && num2 > num1) {
  console.log(num2);
} else if (num2 === num3 && num2 === num1) {
  console.log(`Pareggio`);
} else {
  console.log(num3);
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totale = 35;
let spedizione;
let totaleFinale;

if (totale >= 50) {
  spedizione = 0;
} else {
  spedizione = 9.9;
}
console.log(
  `Totale carrello : ${totale} - Spedizione : ${spedizione} - Totale finale : ${totale + spedizione}`,
);

 const totCarr = totale >=50 
 ? console.log(
   `Totale carrello : ${totale} - Spedizione gratuita - Totale finale : ${totale + spedizione}`

 )
 : console.log(
   `Totale carrello : ${totale} - Spedizione : 9.90 - Totale finale : ${totale + spedizione}`
);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

const myArr = [18, "ciao", false];

for (let i = 0; i < myArr.length; i++) {
   if(typeof myArr[i]==='number'){
      console.log(`${myArr[i]} è un numero`)
   }else {
      console.log(`${myArr[i]} non è un numero`)
   }
}

/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myNumArr = [];
myNumArr.push(1, 2, 3, 4, 5);
myNumArr.unshift(0);
console.log(myNumArr);
console.log(myNumArr.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myCarr = ["Penna", "Quaderno", "Zaino", "Astuccio"];
console.log(myCarr);
myCarr.splice(1, 1);
console.log(myCarr);
myCarr.splice(1,0,'Diario');
console.log(myCarr);
/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const products = ["Penna", "Quadro", "Zaino"];
let product = 'Zaino'; // ne creo uno nuovo dato che il nome è diverso nella consegna //
let found = products.includes(product);
console.log(found);

if (found) {
   let indFound = products.indexOf(product);
  console.log(`${product} è in carrello alla posizione ${indFound}: true`);
} else {
  console.log(`Non in carrello`);
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myUsers = [
  {
    nome: "Federico",
    eta: 34,
  },
  {
    nome: "Vincenzo",
    eta: 29,
  },
  {
    nome: "Fabrizio",
    eta: 18,
  },
];

for (let i = 0; i < myUsers.length; i++) {
  console.log(`${myUsers[i].nome}(${myUsers[i].eta} anni)`);
}

console.table(myUsers);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodObj = [
  {
    nome: "Iphone 12",
    prezzo: 21,
    disponibile: true,
  },
  {
   nome: 'Samsung 12',
   prezzo: 15,
   disponibile : false,
  },
  {
   nome:'Huawei P10',
   prezzo : 9,
   disponibile : true,
  },
  {
   nome : 'Honor c430',
   prezzo : 7,
   disponibile : false,
  }
];

for (let i = 0; i < prodObj.length; i++){
   if (prodObj[i].disponibile === true && prodObj[i].prezzo < 10){
      console.log(`OFFERTA: ${prodObj[i].nome} ${prodObj[i].prezzo} €`)
   } else if ( prodObj[i].disponibile === true && prodObj[i].prezzo >= 10){
      console.log( `${prodObj[i].nome} - prezzo : ${prodObj[i].prezzo} €`)
   } else if (!prodObj[i].disponibile){
      console.log(`${prodObj[i].nome} - Esaurito!`)
   }
}



/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const arrayToInvert = [1,2,3,4,5];
// const arrayInverted = [];

// for (let i = 4; i< arrayToInvert.length;i--){
//    arrayInverted.push(arrayToInvert[i])
// }

// console.log(arrayInverted); -> SBAGLIATO LOOP INFINITO

