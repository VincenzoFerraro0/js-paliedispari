/*
Consigli del giorno:
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
    MINI TASK 
    - Dichiariamo  una variabile dove lutente inserisce se sceglie pari o dispari con .toLowerCase() rendiamo tutti i caratteri minuscoli
    - Dichiariamo una variabile con parsint e prompt per chiedere il numero all' utente da 1 a 5 
    - Dichiariamo la variabile numeroComputer vuota
    - Dichiariamo la variabile risultato vuota
    - Dichiariamo la variabile somma vuota
    - Creiamo una funzione che ci permette di generare un numero casuale da 1 a 5 
    - Salviamo il valore nella variabile corrispondente 
    - nella variabile somma salviamo la somma dei due valori 
    - Creiamo una funzione che determina se il valore inserito nel parametro è pari o dispari
    - con una condizione:
        -verifichiamo se il numero è pari ci restituisce "pari"
            - altrimenti ci restituisce dispari 
    - nella variabile risultato salviamo la funzione con il parametro somma
    - creiamo una condizione:
        -che verifica se il risultato è uguale alla scelta utente ha vinto
            -altrimenti il computer ha vinto 
*/

let sceltaUtente = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5:"), 10);
let numeroComputer ;
let risultato ;
let somma ;

// Genera un numero casuale tra 1 e 5
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

numeroComputer = generaNumeroRandom();

// Calcola la somma dei numeri
somma = numeroComputer + numeroUtente;

// Determina se un numero è pari o dispari
function determinaPariDispari(numero) {     // "numero"= Parametro da inserire                      
    if (numero % 2 === 0) {  //creiamo una condizione dove verifichiamo che il parametro inserito è pari
        return 'pari';      // ci restituisce "pari" è dispari
    } else {                //altrimenti 
        return 'dispari';   // ci restituisce dispari 
    }
}

// Determina se la somma è pari o dispari
risultato = determinaPariDispari(somma) // risultato è pari o dispari in base alla somma

// Controlli 
console.log(`Hai scelto: ${sceltaUtente}`);
console.log(`Il tuo numero: ${numeroUtente}`);
console.log(`Numero del computer: ${numeroComputer}`);
console.log(`Somma: ${somma} (${risultato})`);

// Dichiara il vincitore
if (risultato === sceltaUtente) {
    alert(`hai scelto ${risultato} il risultato è ${somma} hai vinto!`);
} else {
    alert(`il computer ha scelto ${risultato} il risultato è ${somma} ha vinto!`);
}



