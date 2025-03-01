let arr = [1,2,2,1,54,46,798,42132,1321,4,1,4,54,65,2,1,51];

let great = 0;
for(let i = 0 ; i<arr.length;i++){
    if(arr[i]>great){
        great = arr[i];
    }
}
console.log(great)