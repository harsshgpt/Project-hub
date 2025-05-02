function step1(){
    return new Promise(function(res,rej){
        console.log("Step 1 executed");
        res();
    })
}
function step2(){
    return new Promise(function(res,rej){
        console.log("Step 2 executed");
        res();
    })
}
function step3(){
    console.log("Step 3 executed");
}

step1().then(step2).then(step3)