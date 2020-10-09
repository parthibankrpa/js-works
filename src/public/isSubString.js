function isEqual(str1,str2){
    let isEqual = false;
    let indexFound = null;
    let comparingIndex = 0;
    debugger;
   if(str2.length <= str1.length){
    for(let i = 0;i<str1.length && str2[comparingIndex]!==undefined;i++,comparingIndex++){
        if(str2[comparingIndex] === str1[i]){
            indexFound = i;
            isEqual = true
        }else if(comparingIndex>0){
            isEqual = false ;
            comparingIndex = 0;
        }
    }
   }
   return isEqual;
}