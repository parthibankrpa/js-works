let counter = 0;
function prime(n){
    for(x=2;x*x < n;x++){
        counter++;
        if(n%x==0){
            console.log(x)
            return false;
        }
    }
    console.log(counter);
    return true;
}
console.log(prime(57));