const numbers = [21, 32, 15, 3, 16, 2, 27, 1, 18, 41, 36, 31, 31];

const bubbleSort = (A, n) => {
  let temp,
    count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      count++;
      if (A[j] > A[j + 1]) {
        temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
  console.log(A);
  console.log(count);
};

bubbleSort(numbers, numbers.length);
