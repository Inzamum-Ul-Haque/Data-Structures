let queue = {
  head: 0,
  tail: 0,
  q: [],
};

function Enqueue(item) {
  if ((queue.tail + 1) % (5 + 1) === queue.head) {
    console.log("Queue is full");
    return 0;
  }
  queue.q[queue.tail] = item;
  queue.tail = (queue.tail + 1) % (5 + 1);
}

function Dequeue() {
  let item;
  if (queue.tail === queue.head) {
    console.log("Queue is empty!");
    return -1;
  }
  item = queue.q[queue.head];
  queue.head = (queue.head + 1) % (5 + 1);
  return item;
}

function PrintQueue() {
  if (queue.head === queue.tail) {
    console.log("Nothing to print!!");
  }
  if (queue.tail >= queue.head) {
    for (let i = queue.head; i < queue.tail; i++) {
      console.log(queue.q[i]);
    }
  } else {
    for (let i = queue.head; i < 5 + 1; i++) {
      console.log(queue.q[i]);
    }
    for (let i = 0; i < queue.tail + 1; i++) {
      console.log(queue.q[i]);
    }
  }
}

PrintQueue();
Enqueue(5);
PrintQueue();
Enqueue(6);
Enqueue(65);
Enqueue(15);
Enqueue(10);
PrintQueue();
Enqueue(89);

console.log(Dequeue()); // 5
PrintQueue(); // 6, 65, 15, 10
console.log(Dequeue()); // 6
console.log(Dequeue()); // 65
console.log(Dequeue()); // 15
PrintQueue(); // 10
