const arr = [0, 63, 49, 76, 1, 32, 15, 30, 52, 53, 96, 52, 10, 45];

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

buildMaxHeap(arr, arr.length);
console.log(arr);
