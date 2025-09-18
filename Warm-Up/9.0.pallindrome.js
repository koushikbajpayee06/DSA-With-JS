
function isPallindrome(n){
    if(n<0) return false;
    nCopy = n;
    let rev = 0;
    while(n>0){
        let rem = n%10;
        rev = (rev*10) +rem;
        n = Math.floor(n/10);
    }
    // if(rev===nCopy){
    //     return "pallindrome";
    // }else{
    //     return "Not a pallindrome";
    // }
    return rev === nCopy;
}
let num = 232;
let res = isPallindrome(num);
console.log(res);