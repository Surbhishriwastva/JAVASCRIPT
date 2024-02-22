
let n = prompt("enter the digit");
seven = 0;
sodd = 0;
while (n > 0) {
    d = n % 10;
    if (d % 2 == 0) {
        seven = seven + d;
    } else {
        sodd = sodd + d
    }
}
console.log(seven);
console.log(sodd);