
// protype 

// const employee = {
//     caltax() {
//         console.log("tax rate is 10%");
//     }
// };
// const karan = {
//     salary: 50000,
//     caltax() {
//         console.log("tax is 20%");
//     }
// }
// const karan2 = {
//     salary: 50000
// }
// const karan3 = {
//     salary: 50000
// }
// const karan4 = {
//     salary: 50000
// }
// karan__proto__ = employee;
// karan2__proto__ = employee;
// karan3__proto__ = employee;
// karan4__proto__ = employee;

//********************************************************** 
// classs 
// class toyotocar {
//     // constructor() {
//     //     console.log("craeting obj");
//     // }
//     constructor(brand, mileage) {
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }

// }
// let furtuner = new toyotocar("fortuner", 15);


// let lexus = new toyotocar();
//**************************************************/
// inhritance

class person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");

    }

}
class engineer extends person {
    work() {
        console.log("slove probleam");
    }
}

let surbhi = new engineer();
