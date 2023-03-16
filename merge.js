function merge(arr1, arr2) {
  // Array pointers for comparison
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  //   Store merged array
  let mergedArray = [];

  //   Iterate till both the arrays aren't exhausted
  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
      mergedArray.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else {
      mergedArray.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
  }

  /*****   Cases where one of the arrays get exhausted *****/

  //    If arr1 still have elements left
  while (arr1Pointer < arr1.length) {
    mergedArray.push(arr1[arr1Pointer]);
    arr1Pointer++;
  }

  //    If arr2 still have elements left
  while (arr2Pointer < arr2.length) {
    mergedArray.push(arr2[arr2Pointer]);
    arr2Pointer++;
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // Get midpoint of an array
  let midPoint = Math.floor(arr.length / 2);
  //   Store to splitted arrays
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
