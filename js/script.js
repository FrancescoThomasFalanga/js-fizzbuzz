/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/*
- Inizializzazione programma
- stampare in console i numeri da 1 a 100 e memorizzarli
- per i multipli di 3 non bisognerà stampare il numero ma "Fizz" al posto di quest'ultimo
- per i multipli di 5 non bisognerà stampare il numero ma "Buzz" al posto di quest'ultimo
- per i multipli sia di 3 che di 5 non bisognerà stampare il numero ma "FizzBuzz" al posto di quest'ultimo
? SE il numero presenta sia un multiplo di 3 che di 5 
    restituiscilo in pagina con il valore "FizzBuzz"
:? ALTRIMENTI SE il numero presenta solo un multiplo di 3
    restituiscilo in pagina con il valore "Fizz"
:? ALTRIMENTI SE il numero presenta solo un multiplo di 5
    restituiscilo in pagina con il valore "Buzz"
*/






// Creo la variabile che permetterà di creare div numerati da 1 a 100 in automatico

let allNumberEl = document.getElementById("allNumber");

for(let i = 0; i < 100; i++) {

    
    // creare un elemento di tag <div>
    let newDivElement = document.createElement("div");

    // stiamo attribuendo allNumberEl come GENITORE di newDivElement
    allNumberEl.append(newDivElement);
    
    // cambio il valore interno dentro l'elemento
    newDivElement.innerHTML = (i + 1);

    // stampo in console i numeri da 1 a 100
    // console.log(i+1)


    // restituisco in pagina i seguenti valori con i numeri, in base anche ai loro multipli
    if((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {

        newDivElement.innerHTML = "FizzBuzz";
        console.log(newDivElement.innerHTML);
        newDivElement.classList.add("elementWidth");
        newDivElement.classList.add("bothMultiplier");

    } else if((i + 1) % 3 == 0)  {

        newDivElement.innerHTML = "Fizz";
        console.log(newDivElement.innerHTML);
        newDivElement.classList.add("elementWidth");
        newDivElement.classList.add("threeMultiplier");

    } else if((i + 1) % 5 == 0) {

        newDivElement.innerHTML = "Buzz";
        console.log(newDivElement.innerHTML);
        newDivElement.classList.add("elementWidth");
        newDivElement.classList.add("fiveMultiplier");

    } else {

        newDivElement.innerHTML = i + 1;
        console.log(newDivElement.innerHTML);
        newDivElement.classList.add("elementWidth");
        newDivElement.classList.add("normal");
    }
    


}