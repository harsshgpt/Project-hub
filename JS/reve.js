let arr3 = [2,4,6,8,10,12,14,16]
let temp = 0;
for(let i = 0 ; i<arr3.length/2 ;i++){
    temp = arr3[i];
    arr3[i] = arr3[arr3.length-i-1];
    arr3[arr3.length-i-1] = temp;

}
console.log(arr3);
