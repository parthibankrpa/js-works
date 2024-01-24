/**
 * sample input1 [1,3,4] [1,2,3]
 * sample input2 [1,4,6] [1,3,5]
 * sample input3 [1,2,2] [1,1,2]
 * sample input4 [1,1,1] [1,2,2]
 *
 */

const sortFn = (a, b) => a - b;

function rearrangeStudents(arrA = [], arrB = []) {
  if (arrA.length === 0 || arrA.length !== arrB.length) {
    // this should be able to take care when arrB length is zero also
    return -1;
  }
  let operations = 0;
  arrA.sort(sortFn);
  arrB.sort(sortFn);

  try {
    arrA.forEach((item, index) => {
      if (item === arrB[index]) {
        // height matched , moving to next item
        return;
      } else if (
        item < arrB[index] &&
        index + 1 < arrA.length &&
        item === arrA[index + 1]
      ) {
        console.log("step2");
        let temp = arrB[index];
        arrB[index] = arrA[index + 1];
        arrA[index + 1] = temp;
        operations++;
      } else if (
        item > arrB[index] &&
        index + 1 < arrB.length &&
        arrB[index] === arrB[index + 1]
      ) {
        let temp = arrA[index];
        arrA[index] = arrB[index + 1];
        arrB[index + 1] = temp;
        console.log("temp", temp);
        operations++;
      } else {
        throw "height not matched"; // throwing error to break the look when height not matched for an item in middle of the array
      }
    });
  } catch (e) {
    return -1;
  }

  return operations;
}

// console.log(rearrangeStudents([1, 1, 1], [1, 2, 2]));
console.log(rearrangeStudents([1, 5, 5, 3, 6, 6], [1, 3, 4, 4, 7, 7]));

// console.log(rearrangeStudents([1, 3, 4], [1, 2, 3]));

// console.log(rearrangeStudents(undefined, [1, 2]));
// console.log(rearrangeStudents([], [3, 1, 2]));
// console.log(rearrangeStudents([3, 1, 2], []));
