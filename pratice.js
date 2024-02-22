
/* que 1
let head = document.querySelector("h2");
console.dir(head.innerText);
head.innerText = head.innerText + "from apna college students";
*/


// ******************************************que 2********************************************************
//let div = document.getElementsByClassName("box");
//console.dir(div)// show all the box   if we want to indiviual box then used array concept

//console.log(div[2]);// then acess the second  box only

// now we change the text by using js
/*div[0].innerText = "new unique id 1";
div[1].innerText = "new unique id 2";
div[2].innerText = "new unique id 3";
// but it is soo tougf if we have 1000 box so we used loop
*/
// goodway in the we can print multiple box content without changing any thing
/*
let id = 0;
for (divs of div) {
    divs.innerText = ` new unique value ${id}`;
    id++;
}
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@end 2 que@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@222


//****************************** third que***************************************************************************************** */
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// document.querySelector("body").prepend(newbtn);


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//let para = document.querySelector("p");






/****************************fifthchapter(1)**********************************************/
/*
let mode = document.querySelector("#mode");
// mode.addEventListener("click", () => {
//     console.log(" mode is now chages")
// })
let currmode = "light";
let body = document.querySelector("body")
mode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";

        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");

    }

    else {
        currmode = "light";
        //document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currmode);
});

*/
//********************************************************************************** */


//*******************************6(1)********************************* */
// let DATA = "secreat information";
// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewdata() {
//         console.log("data", DATA);
//     }
// }
// let std1 = new user("surbhi", "abc@emai.com");
// let std2 = new user("bulbul", "bcd@gmail.com");

// let tea1 = new user("shardha", "dds@gmail.com");

//***********************************************end**************************** */


//****************************************************************6(2)************************** */
let DATA = "secreat information";
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewdata() {
        console.log("data", DATA);
    }
}
class admin extends user {
    constructor(name, email) {
        super(name, email); // without supper key we cannot create constructor in child class
    }
    editdata() {
        DATA = "some new value";

    }
}
let std1 = new user("surbhi", "abc@emai.com");
let std2 = new user("bulbul", "bcd@gmail.com");

let tea1 = new user("shardha", "dds@gmail.com");

let admin1 = new admin("admin", "admin@gmail.com");





