const numbers = [21, 32, 15, 3, 16, 2, 27, 1, 18, 41, 36, 31, 31];

function selectionSort(A, n) {
  let index_min, temp;

  for (let i = 0; i < n - 1; i++) {
    index_min = i;
    for (let j = i + 1; j < n; j++) {
      if (A[j] < A[index_min]) {
        index_min = j;
      }
    }
    if (index_min !== i) {
      temp = A[i];
      A[i] = A[index_min];
      A[index_min] = temp;
    }
  }
  console.log(A);
}

selectionSort(numbers, numbers.length);
