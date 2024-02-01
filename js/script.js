const gridSquare = document.createElement("div")

for (let i = 1; i <= 100; i++) {

    // se il numero è divisibile per 3 e 5 allora stampa FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById("grid-square").innerHTML += "<div class='FizzBuzz square'>FizzBuzz</div>"
        console.log("FizzBuzz")
    }
    // se il numero è divisibile per 3 allora stampa Fizz
    else if (i % 3 === 0) {
        document.getElementById("grid-square").innerHTML += "<div class='Fizz square'>Fizz</div>"
        console.log("Fizz")
    }
    // se il numero è divisibile per 5 allora stampa Buzz
    else if (i % 5 === 0) {
        document.getElementById("grid-square").innerHTML += "<div class='Buzz square'>Buzz</div>"

        console.log("Buzz")
    }
    // altrimenti stampa il valore di (i)
    else {
        document.getElementById("grid-square").innerHTML += "<div class='square'>" + i + "</div>"
        console.log(i)
    }
}






