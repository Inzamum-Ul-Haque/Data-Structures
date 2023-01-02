const arr = [45, 63, 49, 76, 1, 32, 15, 30, 52, 53, 96, 52, 10];

function merge(A, left, mid, right) {
  let left_size = mid - left + 1;
  let right_size = right - mid;
  let L = [],
    R = [];
  for (let i = 0; i < left_size; i++) {
    L[i] = A[i + left];
  }
  for (let j = 0; j < right_size; j++) {
    R[j] = A[mid + j + 1];
  }

  let i = 0,
    j = 0,
    k = left;
  while (i < left_size && j < right_size) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < left_size) {
    A[k] = L[i];
    i++;
    k++;
  }

  while (j < right_size) {
    A[k] = R[j];
    j++;
    k++;
  }
}

function merge_sort(A, left, right) {
  if (left >= right) {
    return;
  }

  let mid = Math.floor(left + (right - left) / 2);

  merge_sort(A, left, mid);
  merge_sort(A, mid + 1, right);

  merge(A, left, mid, right);
}

merge_sort(arr, 0, arr.length - 1);
console.log(arr);
