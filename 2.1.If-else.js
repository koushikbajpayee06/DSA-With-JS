// Create a function which accepts the age and tells wheather a person is eligible to vote or not.

function eligibleToVote(age){
    if(age < 0){
        console.log("Invalid Input");
    }else if(age<17){
        console.log("Not Eligible");
    }else{
        console.log("Eligible");
    }
}
eligibleToVote(18);

//Create a function to check a number is even or odd?
function oddEven(num)
{
    let rem = num%2;
    if(rem === 0){
        console.log("Even");
    }else{
        console.log("Odd")
    }
}
oddEven(4);