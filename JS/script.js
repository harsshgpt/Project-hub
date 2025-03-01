let arr = [1,2,2,1,54,46,798,42132,1321,4,1,4,54,65,2,1,51];

let arr2 = [...new Set(arr)];
arr2.sort(function(a,b){
    return b-a;
})
console.log(arr2[1]);
