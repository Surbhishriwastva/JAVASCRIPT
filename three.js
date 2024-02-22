function myfun(m) {
    console.log("surbhi");
    console.log(" i am leranig javascrip");
}
//myfun();
function sum(x, y) {
    console.log(x + y);
}
//sum(2, 5);

function add(x, y) {
    let s = x + y;
    return s;

}
let t = add(2, 4);
//console.log(t);

const arrowsum = (a, b) => {
    console.log(a + b);
};

const mult = (p, q, r) => {
    console.log(p * q * r);
}
//mult(9, 2, 4)

let arrmult = (a, b) => {
    return a * b;
}
let r = arrmult(5, 5)
//console.log(r);
//arrmult = 5;

const printhello = () => {
    console.log("surbhi");
}
//printhello()


// pratice 

function myfun(res) {

    let s = 0;
    for (let i = 0; i < res.length; i++) {

        if (res == "a" || res == "e" || res == "i" || res == "o" || res == "u") {
            s++;
        }

    }
    console.log(s);

}

function countval(str) {
    let count = 0;

    for (let char of str) {
        // console.log(char);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(count);
}
//countval("surbhi");

const cval = (str) => {
    let count = 0;

    for (let char of str) {
        // console.log(char);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(count);
};

// for each loop
let arr = [2, 4, 6, 9]
arr.forEach((val, indx, arr) => {
    //console.log(val, indx, arr);
});

// pratice
//print square of no
// let n = [2, 4, 6, 5]
// n.forEach((val) => {
//     console.log(val * val)
// });
// // or
// let num = [34, 56, 78];
// let seq = (num) => {
//     console.log(num * num);
// };
// num.forEach(seq);


// map func
let marr = [2, 4, 7, 9];
marr.map((val) => {
    //console.log(val);


});

let maparr = [5, 6, 9, 11];
let rearr = maparr.map((val) => {
    return val * val;
}
)
//console.log(rearr);
//console.log(maparr)

let earr = [1, 2, 3, 4, 5, 6, 7];
let evarr = earr.filter((val) => {
    return val % 2 === 0;
});
//console.log(evarr);
//console.log(earr)

// lategest no i array
let ln = [2, 4, 8, 11, 9, 3, 5, 7]
let final = ln.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
//6console.log(final)


// pratice 
//to find the student marks grater than 90
// let stumarks = [64, 56, 91, 90, 98, 95, 56, 77];
// let rmarks = stumarks.filter((val) => {
//     return val >= 90;
// })
// console.log(rmarks)

//prtice 2 
/* take a number n as input from user . create an array
o fnumbers from 1 to n . use the reduce method to calculate sum of 
all numbers in the array. use the reduce method to calculate
product of all numbers in the array.*/

let number = prompt("enter the list of no");
let narr = [];
for (let i = 1; i <= number; i++) {
    narr[i - 1] = i;

}
console.log(narr);
let fr = narr.reduce((prev, curr) => {
    return prev * curr;
}

)
console.log(fr)