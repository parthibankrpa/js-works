/**
 * The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given number
 */


var twoSum = function(numbers, target){
    const previousValues = {};
    for(let i = 0; i<numbers.length;i++){
        const currentNumber = numbers[i];
        const neededValue = target - currentNumber;
        const index2  = previousValues[neededValue];
        console.log(`CurrentNumber= ${currentNumber} neededValue = ${needeValue}`);
        if(index2 != null){
            console.log(previousValues);
            return [index2,i];
        }else{
            previousValues[currentNumber] = i;
        }
    }
}