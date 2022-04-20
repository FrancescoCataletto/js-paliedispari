/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input

 */

// const userWord = prompt("Inserisci una parola");

// function isPalindrom(userWord){
//     let reversedWord = "";
//     for(let i = userWord.length -1; i >= 0; i--){
//         reversedWord += userWord[i];
//     }  
    
//     if(userWord === reversedWord){
//         return true;
//     }else if(userWord !== reversedWord){
//         return false;
//     }
// }

// console.log(isPalindrom(userWord));






/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input

 */

const segno = prompt("pari o dispari?");
const numero = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(segno, numero);

let random;
function randomNum(){
    random = Math.floor(Math.random() * 5 + 1);
    return random;
}

console.log(randomNum());

let sum = numero + random;
console.log(sum);

