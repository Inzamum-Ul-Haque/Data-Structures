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
  for (let i = Math.floor(heapSize / 2); i >= 1; i--) {
    maxHeapify(heap, heapSize, i);
  }
};

const heapSort = (heap, heapSize) => {
  let temp;
  buildMaxHeap(heap, heapSize);

  for (let i = heapSize; i >= 1; i--) {
    temp = heap[1];
    heap[1] = heap[i];
    heap[i] = temp;
    heapSize -= 1;
    maxHeapify(heap, heapSize, 1);
  }
};

heapSort(arr, arr.length - 1);
console.log(arr);
