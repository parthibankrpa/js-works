function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // Choose the first element as the pivot
  const left = [];
  const right = [];

  // Partition the array into left and right sub-arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively apply quick sort to the left and right sub-arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", unsortedArray);

const sortedArray = quickSort(unsortedArray.slice()); // Create a copy of the array
console.log("Sorted Array:", sortedArray);
