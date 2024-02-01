
for (let i = 1; i <= 100; i++) {
    // se il numero è divisibile per 3 e 5 allora stampa FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    // se il numero è divisibile per 3 allora stampa Fizz
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    // se il numero è divisibile per 5 allora stampa Buzz
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    // altrimenti stampa il valore di (i)
    else {
        console.log(i)
    }
}






