let i = 0 ;n=55;counter = 0;
let memo = [];
for(i;i<n;i++){
    console.log(fibonacci(i));
}
console.log(`counter = ${counter}`);
console.log(`memo size = ${memo.length}`)
// function fibonacci(n){
//     counter++;
//     if(n==0)
//         return 1;
//     if(n==1)
//         return 1;
//     return fibonacci(n-1) + fibonacci(n-2);
// }

function fibonacci(n){
    if(memo[n] !== undefined){
        return memo[n];
    }
    counter++;
    if(n==0){
        memo[n]=1;
        return 1;
    }
    if(n==1){
        memo[n]=1;
        return 1;
    }
    memo[n]= fibonacci(n-1) + fibonacci(n-2);
    return memo[n];
}