function step1(){
    return new Promise(function(res,rej){
        console.log("Step 1 executed");
        setTimeout(()=>{res()},2000)
    })
}
function step2(){
    return new Promise(function(res,rej){
        console.log("Step 2 executed");
        setTimeout(()=>{res()},2000)
    })
}
function step3(){
    return new Promise(function(res,rej){
        console.log("Step 3 executed");
        res()
        
    })
}

step1().then(step2).then(step3).then(()=>{
    console.log("all steps done ")
})