//Write a function that returns count of digite in a number
function countDigit(n){
    if(n ==0) return 1;
    n = Math.abs(n);
    let count = 0;
    while(n>0){
        n=Math.floor(n/10);
        count++;
    }
    return count;
}
let num =0;
var res = countDigit(num);
console.log(res);

//Math.floor
//Math.round
//Math.ceil
//Math.abs