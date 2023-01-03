const arr = [45, 63, 49, 76, 1, 32, 15, 30, 52, 53, 96, 52, 10];

function partition(A, low, high) {
  let pivot = A[high],
    temp;

  for (i = low - 1, j = low; j < high; j++) {
    if (A[j] < pivot) {
      i += 1;
      temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  }
  temp = A[i + 1];
  A[i + 1] = A[high];
  A[high] = temp;
  return i + 1;
}

function quickSort(A, low, high) {
  if (low >= high) {
    return;
  }

  let p = partition(A, low, high);

  quickSort(A, low, p - 1);
  quickSort(A, p + 1, high);
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
