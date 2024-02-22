
// Assignment operator
// let a = 5;
// let b = 10;
// console.log("a=", a, "&", "b =", b);
// console.log("Addition =", a + b);
// console.log("sub =", a - b);
// console.log("multi=", a * b);
// console.log("div =", a / b);
// console.log("mod =", a % b);

// //console.log(++a);// 6
// console.log(a++); // 5
// console.log(a);//6
// //console.log(--b);//9
// console.log(b--);//10
// console.log(b);//9

// Assigment operator
// let a = 5;
// a += 4;// a=a+4
// console.log(a)//9

// comparision operator 
// let a = 5;
// let b = 8;
// console.log(a == b);// f
// b = 5;

// console.log(a == b);// t

// let n = 5;
// let s = "5";
// console.log(n == s);// t

// console.log(n === s);// f

// logical operator 
// let a = 5;
// let b = 10;
// let cond1 = b > a;
// let cond2 = a < b;
// console.log(cond1 && cond2);// t


// cond2 = a > b;
// console.log(cond1 && cond2);// f
// console.log(cond1 || cond2);// t
// console.log(!(cond2));// t


//pratice1
// let number = prompt("enter the no ");
// if (number % 5 == 0) {
//     console.log(" yes it is mutlipleof 5");
// }
// else {
//     console.log("it is notmultiple of 5");
// }


//pratcice2
// let grad = prompt("enter the grades");
// if (grad >= 90 && grad <= 100) {
//     console.log("A");
// }
// else if (grad >= 70 && grad <= 89) {
//     console.log("B");
// }
// else if (grad >= 60 && grad <= 69) {
//     console.log("c");
// }
// else if (grad >= 50 && grad <= 59) {
//     console.log("D");
// }
// else if (grad >= 0 && grad <= 49) {
//     console.log("f")
// }
// console.log("Accoording to your score choose valid no")

// sum of n number
// 
// for ofloop
// let n = "surbhii";
// for (let i of n) {
//     console.log(i);
// }
// // for in loop

// let std = {
//     name: "surbhi",
//     id: 14042,
//     cgpa: 7.75,
// };
// for (let key in std) {
//     console.log(key, std[key])
// }


// que
// let i = 0;
// do {
//     if (i % 2 == 0)
//         console.log(i)
//     i++;
// } while (i <= 100);


// que
// 
// string
// let str = "surbhi";
// console.log(str.length);
// console.log(str[5]);

// string template
// let std = {
//     pen: "black",
//     price: 50,
// };
// console.log("color of pen is ", std.pen, "and price is", std.price);
// let output = `the color of pen is ${std.pen} is ${std.price} rs`;
// console.log(output)


// string method
// let str = "surbhi"
// let ptr = "bulbul"
// str = str.toUpperCase();
// console.log(str);
// console.log(str.trim())
// console.log(str.slice(2, 4))
// console.log(ptr.concat(str))

// pratice
// let username = prompt("eneter your username");
// //let dis = username.length;
// console.log("@" + username + username.length)


//// arrray
// let marks = [45, 48, 45, 48];
// console.log(marks);
// let hero = ["surbhi", "sherya", "bulbul"];
// console.log(hero);
// console.log(hero.length);
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i])
// }
// for (no of marks) {
//     console.log(no)
// }

// let cities = ["pune", "noida", "delhi", "banglore"];
// for (let city of cities) {
//     console.log(city);
//    // console.log(city.toUpperCase());
// }


// pratice 
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];

// }
// let tot = sum / 6;
// console.log(tot);

// // pratice
// let price = [250, 645, 300, 900, 50];
// for (let i = 0; i < price.length; i++) {
//     let offer = price[i] / 10;
//     price[i] = price[i] - offer;

//     console.log(price[i]);
// }

// push or pop
let food = ["a", "b", "c", "d"];
//food.push("E");
// console.log(food);
// food.pop();
// console.log(food);
// console.log(food);
// console.log(food.toString());
// console.log(food);
// let m = [2, 4, 7, 9];
// console.log(m.toString())
// console.log(m)
// for (let n of m) {
//     console.log(n)
// }
// let eat = ["s", "b"];
// let rs = food.concat(eat);
// console.log(rs);
// //food.unshift('k');
// food.shift()
// console.log(food)

// pratice
let company = ["Blooberg", "microsoft", "uber", "google", "ibm", "nextflix"];
// console.log(company);
// company.shift();
// console.log(company);
// company.splice(2, 1, "ola");
// console.log(company);
company.splice(7, 1, "amazon")
console.log(company);
for (n of company) {
    console.log(n)
}
