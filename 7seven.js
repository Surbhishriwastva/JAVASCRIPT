
// this is synchronous prg
// console.log("one");
// console.log("two");

// console.log("three");
// console.log("four");


// wait for time after comlete it print 
// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 4000);

// or 2nd method
// setTimeout(() => {
//     console.log("hello");
// }
//     , 4000)


// asynchoronous 
// console.log("one");
// console.log("2");
// setTimeout(() => {
//     console.log("hello");

// }
//     , 4000)
// console.log("3");
// console.log("4");


// callback
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumcallback) {
    sumcallback(a, b);
}
calculator(1, 2, sum);