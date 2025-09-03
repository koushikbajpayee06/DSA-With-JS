//Find The Second Largest Number

/**corner cases
--Array is empty
-- Array has negative numbers
-- Array has duplicates
-- Array has Infinite Numbers
**/

function secondLargest(arr){
    if(arr.length<2){
        return "Array should have atleast 2 elements";
    }
    let firstLargest   = -Infinity;
    let secondLargest = - Infinity;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i]
        }
        else if(arr[i]>secondLargest && arr[i] != firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}


arr = [4,9,0,2,8,7,1,9]
let res = secondLargest(arr);
console.log(res);

