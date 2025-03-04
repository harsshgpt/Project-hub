//here i am creating counter using a clouser

function count (){
    let ct = 0 ;
    return (function(){
        ct++;
        console.log(ct);
        
    })
}

let rct = count();

rct()
rct()