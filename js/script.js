/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input

 */


const palBtn = document.getElementById("pal-btn");
const isPal = document.getElementById("isPal");

palBtn.addEventListener("click", function(){

    const userWord = document.getElementById("pal-word").value;

    function isPalindrom(userWord){
        if(!isNaN(userWord)){
            return isPal.innerHTML = "Non inserire numeri o caratteri speciali";   
        }
        let reversedWord = "";
        for(let i = userWord.length -1; i >= 0; i--){
            reversedWord += userWord[i];
        } 
        
        if(userWord === reversedWord){
            isPal.innerHTML = "Questa parola è palindroma";
        }else if(userWord !== reversedWord){
            isPal.innerHTML = "Questa parola non è palindroma";
        }
    }
    return isPalindrom(userWord);
})






/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus: L’inserimento avviene tramite un campo input

 */
const numBtn = document.getElementById("num-btn");
const result = document.getElementById("result");
const computerNum = document.getElementById("computer-num");

numBtn.addEventListener("click", function(){

    const segno = document.getElementById("segno").value;
    const numero = parseInt(document.getElementById("your-num").value);

    let random;
    function randomNum(){
        random = Math.floor(Math.random() * 5 + 1);
        computerNum.innerHTML = "Computer number is" + " " + random;
    }
    
    randomNum();

    let sum = numero + random;

    function winner(sum){
        if(segno === "pari" && (sum % 2) === 0){
            result.innerHTML = ("You won!");
        }else if(segno === "dispari" && (sum % 2) === 0){
            result.innerHTML =("You lost!");
        }else if(segno === "pari" && (sum % 2) !== 0){
            result.innerHTML = ("You lost!");
        }else if (segno === "dispari" && (sum % 2) !== 0){
            result.innerHTML = ("You won!");
        }
    }

    return winner(sum);

})

