
arr = [0,1,2,3,3,2,1,5,3,4,8,3]

function removeElement(arr,val){
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== val){
            arr[x] = arr[i];
            x = x+1;
        }
    }
    return x;
}

var res = removeElement(arr,3);
console.log(res);