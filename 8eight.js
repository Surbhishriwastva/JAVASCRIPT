/*
const URL = "https://cat-fact.herokuapp.com/facts";
// /*
// let promise = fetch(URL);
// console.log(promise);
// */
// const getfacts = async () => {
//     console.log("getting data............");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
// }

// */


const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#facts");
let btn = document.querySelector("#btn");
const getfacts = async () => {
    console.log("getting data............");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data[2].text; 0
};
btn.addEventListener("click", getfacts);