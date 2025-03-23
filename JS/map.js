let arr  = [2,4,6,8,10,12,14,16]

function har(arrx,fn){
    for(let i = 0 ; i<arrx.length;i++){
        arrx[i] = fn(arrx[i])
    }
    return arr;
}

let consti = 5;

let me = har(arr,function(value){
    return value+1;
})