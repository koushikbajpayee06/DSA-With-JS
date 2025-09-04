/*
    let n = 4
    for(let i = 0;i<n; i++){
        let row = '';
        for(j=0;j<n;j++){
            row = row+ "*";
        }
        console.log(row);
    }
*/
/**
n = 4;
for(let i = 0; i<n; i++){
    row = "";
    for(let j=0; j<=i; j++){
        row = row + "*";
    }
    console.log(row)
}
**/
/** 
n = 4;
for(let i = 0; i<n; i++){
    row = "";
    for(let j=0; j<i+1; j++){
        row = row + "*";
    }
    console.log(row);
}
**/
/**
n = 5;
for(let i=1; i<=n; i++){
    let row = ''
    for(let j = 1; j<=i;j++){
        row =row+j
    }
    console.log(row)
        
}
**/
/** 
n = 5;
for(let i=0; i<n; i++){
    let row = ''
    for(let j = 0; j<=i;j++){
        row =row+(j+1)
    }
    console.log(row)
        
}
**/
/**
    n = 5;
    for(let i = 0; i<n;i++){
        let row = '';
        for(let j = 0; j<=i; j++){
            row = row+(i+1);
        }
        console.log(row);
    }
**/
/**
n=5;
for (let i = 0;i<5;i++){
    let row = '';
    for(let j=0;j<n-i;j++){
        row = row+(j+1);
    }
    console.log(row);
}
**/

/**
let n = 5;
for(let i = 0;i<n;i++){
    let row = '';
    for(let j=0;j<n-i;j++){
        row = row+'*'
    }
    console.log(row);
}
**/
/**
n = 5;
for(let i = 0; i<n; i++){
    row = '';
    //adding empty spaces
    for(let j = 0; j <n-(i+1); j++){
        row = row+' ';
    }
    for(let k = 0; k < i+1; k++){
        row = row+"*";
    }
    console.log(row);
}
 **/
/**
n = 5;
for (let i = 0; i<n; i++){
    let row = '';
    let flip= 1;
    for(let j=0; j<=i; j++){
        row = row+flip;
        if(flip==1) {
            flip = 0
        }else{
            flip = 1
        }

    }
    console.log(row);
}
 **/

n = 5;
let flip= 1;
for (let i = 0; i<n; i++){
    let row = '';
    
    for(let j=0; j<=i; j++){
        row = row+flip;
        if(flip==1) {
            flip = 0
        }else{
            flip = 1
        }
    }
    console.log(row);
}