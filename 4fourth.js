

/* this line is simply used for see the result that it is worl or not
// console.log("welcome");
// alert("surbhi")

*/


/*how to acess htmlcode in js
console.dir(window.document)
//or
console.dir(document);
console.dir(document.body) // ye to pura object diikha dega body ka
console.log(document.body)// ye  whi object ka html version

*/

// dom manipulation

/*acess by id
let heading = document.getElementById("heading");//h1
console.dir(heading);
*/

/* acess by class
let headings = document.getElementsByClassName("classheading");
console.dir(headings);
//console.log(headings);

*/
/*acess by tag
let para = document.getElementsByTagName("p")
console.dir(para)
*/

/*acess by query
let res = document.querySelector("p");
//console.dir(res);// it display only the first element


let resmult = document.querySelectorAll("p");
console.dir(resmult);// it display all element
*/

// properties
/*tag name
let res = document.querySelector("button");
console.log(res.tagName)l
*/
// inner text ex of mango gaiva in html code
//let div = document.querySelector("div")
//console.dir(div);
/*
let h1 = document.getElementById("heading");
console.dir(h1)
*/

/*atrributess in dom manipulations

// for acess id

let div = document.querySelector("div");
console.log(div);
// let getid = div.getAttribute("id");
// console.log(getid)
// let getname = div.getAttribute("name");
// console.log(getname)
*/

// for acess class
/*
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
*/

// to set the atribute
/*
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newclass"));
*/

// for changing and see the style
/*
let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.fontSize = "28px";
div.innerText = "HELLO";
*/

// DOM MANIPLULATION
// insert element
/*
// this is creating
let newbtn = document.createElement("button");
newbtn.innertext = "surbhi"
console.log(newbtn);
let div = document.getElementById("sur");

// this is for dispalying
//div.append(newbtn);// see under the purple box and also in the last
//div.prepend(newbtn);// inside the box at the top
// div.after(newbtn);//   bottom  of the box
// div.before(newbtn);// top / before start
*/

// adding heading
/*
let newheading = document.createElement("h1");
newheading.innerHTML = "<i> Hi I am new!</i>";
document.querySelector("body").prepend(newheading);
*/

// delting element
// let deleth3 = document.querySelector("h3");
// deleth3.remove();
