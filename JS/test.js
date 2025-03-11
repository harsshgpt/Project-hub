let n = Number(prompt("enter a number"));
let sum = 0 ;
for(let i = 1; i<=n/2;i++){
  if(n%i ==0 ){
    if(i == 1 || i == n){
        continue;
    }else{
        sum++;
    console.log(i);}
    
  }
}
if(sum == 0 ){
    console.log("prime");
    
}else{
    console.log("Non prime");
    
}