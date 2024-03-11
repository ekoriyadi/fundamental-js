console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");

// const coffeeStock = require('./state');
// console.log(coffeeStock);

const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);

// const makeCoffee = (type, miligrams) =>{
//     if(coffeeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuar!");
//     }else{
//         console.log("Biji kopi habis!");
//     }
// }

//makeCoffee("robusta",80)