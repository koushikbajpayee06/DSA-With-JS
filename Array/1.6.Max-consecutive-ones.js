function MaxConsOne(arr){
    let currentCount = 0;
    let MaxCount = 0;
    for (let i = 0; i<arr.length; i++){
        if(arr[i] == 1){
            currentCount ++;
        }else{
            MaxCount = Math.max(currentCount,MaxCount)
            currentCount = 0;
        }
    }
    return Math.max(currentCount,MaxCount);
}

arr = [1,1,0,1,1,1,0,1,1,1,1,0,1,1]
console.log(MaxConsOne(arr));