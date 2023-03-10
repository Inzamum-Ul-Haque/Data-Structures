const arr = [0, 19, 7, 17, 3, 5, 12, 10, 1, 2];

function left(i) {
  return 2 * i;
}

function right(i) {
  return 2 * i + 1;
}

function parent(i) {
  return Math.floor(i / 2);
}

function maxHeapify(heap, heapSize, i) {
  let l, r, largest, temp;

  l = left(i);
  r = right(i);

  if (l <= heapSize && heap[l] > heap[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= heapSize && heap[r] > heap[largest]) {
    largest = r;
  }

  if (largest !== i) {
    temp = heap[largest];
    heap[largest] = heap[i];
    heap[i] = temp;
    maxHeapify(heap, heapSize, largest);
  }
}

const buildMaxHeap = (heap, heapSize) => {
  for (let i = heapSize / 2; i >= 1; i--) {
    maxHeapify(heap, heapSize, i);
  }
};

buildMaxHeap(arr, arr.length - 1);
console.log(arr);
