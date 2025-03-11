let n = Number(prompt("enter a number"));
let evensum = 0 ;
let oddsum = 0 ;
for(let i = 1;i<=n;i++){
    if(i%2 == 0){
     evensum += i;
    }else{
       oddsum +=i;
    }
}
console.log(`The even sum of ${n} is ${evensum} and the odd sum of ${n} id ${oddsum}`);
