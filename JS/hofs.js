//clouser :- clouser are those who return a function and that returned function uses any variable of parent function
//call back function:- a function which is passed as a parameter in any function
//hofs :- higher order function are those who take any function as a parameneter or return any function 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
function abcd(ac){
    ac();
}

function name (){
    console.log("hello world");
    
}

abcd(name)