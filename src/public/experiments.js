// async function main(){
//     // console.log(b);
//     if(false){
//         let b =0;
//         var a = 10;
//     }else{
//         let b =1;
//         var a =20;
//     }
//     console.log(a);
//     try{
//         const promise  = await Promise.reject("resolvingp promise");

//     // console.log(promise);
//     }catch(e){
//         console.log(e);
//     }
    

// }
// main();
// console.log(b);

// setTimeout(()=>{console.log("settimeout")},0);
// const promise  = Promise.resolve("resolvingp promise");
// promise.then((value)=>{console.log(value)});

// 
// const result = main();

function clickHandler(){
    (function(){var i=0; console.log(i)})();
    console.log(i)
}