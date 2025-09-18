
//Write a function that searches for an element in an array and returns the index, if the element is not present the return -1

// function searchElement(arr, n){
//     for(let i = 0; i<arr.length; i++ ){
//         if(arr[i]===n){
//             return i 
//         }
//     }
//     return -1;

// }
// let arr = [4, 2, 0, 10, 8, 30];
// console.log(searchElement(arr,23));


//Write a function which returns the number of negative number in an array


// function negativeNumber(arr){
//     let count = 0;
//     for (let i =0;i<arr.length;i++){
//         if(arr[i]<0){
//             count ++;
//         }
//     }
//     return count;
// }

// arr = [2,3,4,5,-12,-15,9,7,-5];
// let res = negativeNumber(arr);
// console.log(res);

// Write a function which returns largest function in the array
// function findLargest(arr){
//     let largest = arr[0];
//     for (let i = 0 ; i<arr.length ; i++){
//         if  (arr[i] < arr[i+1]){
//             largest = arr[i+1];
//         }
//     }
//     return largest;
// }

// let arr = [5,10,0,8,17,1,24];
// let res1 = findLargest(arr);
// console.log(res1);


// Find the minimum number in the array
function findMinimum(arr){
    let minimum = Infinity;
    for (let i= 0;i<=arr.length;i++){
        if(arr[i] <minimum){
            minimum = arr[i];
        }
    }
    return minimum;
}
arr = [2,3,4,5,-12,-15,9,7,-5];
let res1 = findMinimum(arr);
console.log(res1);

