let n = Number(prompt("enter a number"));

for(let i = 1; i<=n;i++){
  if(n%i ==0 ){
    if(i == 1 || i == n){
        continue;
    }else{
    console.log(i);}
    
  }
}