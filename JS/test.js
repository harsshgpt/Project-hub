let n = Number(prompt("enter a number"));

for(let i = 1;i<=n;i++){
    console.log(`The table of ${i}`)
    for(let j = 1;j<=10;j++){
        console.log(i*j);
    }
}