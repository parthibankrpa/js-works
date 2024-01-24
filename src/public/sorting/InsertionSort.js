function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i]; // Select the current element to be inserted
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the sorted part of the array
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Original Array:", unsortedArray);

const sortedArray = insertionSort(unsortedArray.slice()); // Create a copy of the array
console.log("Sorted Array:", sortedArray);
