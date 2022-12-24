let linkedList = [];

function createNode(item, next) {
  let node = {
    data: item,
    next: next,
  };

  linkedList.push(node);
}

createNode(5, 3);
createNode(12, 5);
createNode(8, 6);
createNode(13, null);
createNode(3, 4);
createNode(6, 2);
console.log(linkedList);
