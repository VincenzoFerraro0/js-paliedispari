/* 
Palindroma:
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno:
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

*/

/*
    MINI TASK:
    - creiamo una variabile con la funzione prompt e chiediamo di inserire una parola 
    - creaiamo una funzione 
    - all' interno della funzione dichiariamo una variabile che corrisponderà alla parolaUtente invertita
    - Confrontiamo la parolaUtente con la parolaUtente invertita.
    - Creiamo una condizione dove richiamiamo funzione palindroma con il parametro che vogliamo controllare ovvero parolaUtente.
    - Se si verifica stampiamo che è palindroma 
    -   altrimenti non è palindroma

 */

    let parolaUtente = prompt("Inserisci una parola:");

    
    function palindroma(parolaUtente) {
        // Invertire la parola
        let parolaInvertita = parolaUtente.split('').reverse().join('');
        // Confrontare originale e invertita
        return parolaUtente === parolaInvertita;
    }
    
    if (palindroma(parolaUtente)) {
        alert(`La parola "${parolaUtente}" è palindroma!`);
    } else {
        alert(`La parola "${parolaUtente}" non è palindroma.`);
    }
    