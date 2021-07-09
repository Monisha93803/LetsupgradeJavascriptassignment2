//by taking numbers from 1-100.
//Print Fizz if a number is divisible from 3,
//Buzz if a number is divisible from 5 and 
//FizzBuzz if a number divisible from 15.
//write a program in javascript without using mod.

for (i = 0; i <= 100; i++) {
    a = i / 15;
    b = i / 3;
    c = i / 5;
    if (Number.isInteger(a)) {
        console.log("FizzBuzz");
    } else if (Number.isInteger(b)) {
        console.log("Fizz");
    } else if (Number.isInteger(c)) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}