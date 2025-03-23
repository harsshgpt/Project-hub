//For checking automorphic
// let n = Number(prompt("Enter Here a number"))
// let copy = n;
// let count = 0;

// while(n>0){
//     count++;
//     n = Math.floor(n/10);
// }

// let sqr = Math.pow(copy,2);
// let lsts = sqr % (Math.pow(10,count))

// if(lsts == copy){
//     console.log("Automorphic")
// }else console.log("NOt Automorphic")

const prompt = require('prompt-sync')();
let n = prompt("Eneter a number")
console.log(n);   