// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     let a = 25;
//     a++;
//     console.log(a);//26
// }

// // event object
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);



// };

// event listner
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked");
// })

// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked again ");
// })

// remove 
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked hnadler 1");
})

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked hnadler 2");
})

const handler3 = () => {
    console.log("button 1 was clicked hnadler 3");

}
btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked hnadler 4");
})
// want to remove handler3
// btn1.removeEventListener("click", () => {
//     console.log("button was clicked - handler3") // but not working due to diff diff memoy space allocated for this we have to store ib variable
// })

btn1.removeEventListener("click", handler3)