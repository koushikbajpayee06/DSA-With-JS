// for (let i = 5; i< 4;i++){
//     console.log("hello World");
// }

// let arr = [10,6,2,0,8,3,80];
// let length = arr.length;
// for(let i = 0 ; i<length; i ++){
//     console.log(arr[i]);
// }



// Print all the even numbers
let arr = [10,7,5,0,8,3,80];
function printEven(arr){
    for (let i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            console.log(arr[i]);
        }else{
            continue;
        }
    }
}

printEven(arr);

