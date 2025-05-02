let a = 0 ;
function step1 (){
    return new Promise((res,rej) =>{
        setTimeout(()=>{console.log("food ordered❤️")},1000)
        
        setTimeout(()=>{ res()},2000)
    })
}
function step2(){
    return new Promise((res,rej)=>{
        console.log("food shipped🛵")
        setTimeout(()=>{ res()},2000)
        a = Math.floor(Math.random()*10)
    })
}
function step3(){
    return new Promise((res,rej)=>{
        a>5?console.log("food Delivered✅"):console.log("food UnDelivered❌")
        
        
        res();
    })
}


step1().then(step2).then(step3)