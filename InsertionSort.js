const numbers = [21, 32, 15, 3, 16, 2, 27, 1, 18, 41, 36, 31, 31];

const insertionSort = (A, n) => {
  let item, j;

  for (let i = 1; i < n; i++) {
    item = A[i];

    j = i - 1;
    while (j >= 0 && A[j] > item) {
      A[j + 1] = A[j];
      j = j - 1;
    }
    A[j + 1] = item;
  }
  console.log(A);
};

insertionSort(numbers, numbers.length);
